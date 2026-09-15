/**
 * Landing page section tracker
 * 1. Put your Apps Script /exec URL in ENDPOINT
 * 2. Add data-track="name" to every area you want to measure:
 *      <section data-track="hero">...</section>
 *      <section data-track="pricing">...</section>
 * 3. Optional: label buttons/links: <a data-track-click="buy-now">
 * 4. Include before </body>: <script src="tracker.js"></script>
 */
(function () {
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbx76nY80uqd1qGWXVszp5G5ZoroELEMm-gZMjeQZIrcNsdT2U0SfsgToTO7m3XTnFIg/exec';
  const MAX_JOURNEY = 200;
  const MAX_CLICKS = 100;

  const t0 = performance.now();
  const secs = () => +((performance.now() - t0) / 1000).toFixed(1);
  const uid = () =>
    (crypto.randomUUID && crypto.randomUUID()) ||
    Date.now().toString(36) + Math.random().toString(36).slice(2);

  // Returning visitor ID (same browser)
  let visitorId;
  try {
    visitorId = localStorage.getItem('lp_vid');
    if (!visitorId) { visitorId = uid(); localStorage.setItem('lp_vid', visitorId); }
  } catch (_) { visitorId = uid(); }

  const params = new URLSearchParams(location.search);
  const session = {
    sessionId: uid(),
    visitorId,
    page: location.pathname,
    referrer: document.referrer || 'direct',
    utm: {
      source: params.get('utm_source'),
      medium: params.get('utm_medium'),
      campaign: params.get('utm_campaign')
    },
    device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    screen: screen.width + 'x' + screen.height,
    language: navigator.language,
    startedAt: new Date().toISOString()
  };

  const sections = {};   // name -> { seconds, visits }
  const journey = [];    // [{ section, at, seconds }]
  const clicks = [];     // [{ label, section, at }]
  let current = null;
  let segStart = null;
  let maxScroll = 0;

  // ---- Timing ----
  function startTimer() {
    if (!current || segStart !== null || document.hidden) return;
    segStart = performance.now();
    const last = journey[journey.length - 1];
    if (!last || last.section !== current) {
      if (journey.length < MAX_JOURNEY) journey.push({ section: current, at: secs(), seconds: 0 });
      (sections[current] ||= { seconds: 0, visits: 0 }).visits++;
    }
  }

  function stopTimer() {
    if (!current || segStart === null) return;
    const s = (performance.now() - segStart) / 1000;
    sections[current].seconds += s;
    const last = journey[journey.length - 1];
    if (last && last.section === current) last.seconds += s;
    segStart = null;
  }

  function setCurrent(name) {
    if (name === current) return;
    stopTimer();
    current = name;
    startTimer();
  }

  // ---- Which section is on screen (the one taking most of the viewport) ----
  const visible = new Map();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => visible.set(e.target, e.isIntersecting ? e.intersectionRect.height : 0));
    let best = null, bestH = 0;
    visible.forEach((h, el) => { if (h > bestH) { bestH = h; best = el; } });
    setCurrent(best ? best.dataset.track : null);
  }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) });

  document.querySelectorAll('[data-track]').forEach((el) => io.observe(el));

  // ---- Scroll depth ----
  addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight;
    const d = Math.min(100, Math.round(((scrollY + innerHeight) / h) * 100));
    if (d > maxScroll) maxScroll = d;
  }, { passive: true });

  // ---- Clicks ----
  document.addEventListener('click', (e) => {
    const t = e.target.closest('a, button, [data-track-click]');
    if (!t || clicks.length >= MAX_CLICKS) return;
    clicks.push({
      label: t.dataset.trackClick || (t.innerText || '').trim().slice(0, 60) || t.href || t.tagName,
      section: current,
      at: secs()
    });
  }, true);

  // ---- Send ----
  function buildPayload() {
    stopTimer();
    const rounded = {};
    Object.keys(sections).forEach((k) => {
      rounded[k] = { seconds: +sections[k].seconds.toFixed(1), visits: sections[k].visits };
    });
    const payload = {
      ...session,
      updatedAt: new Date().toISOString(),
      totalSeconds: secs(),
      maxScrollPercent: maxScroll,
      sections: rounded,
      journey: journey.map((j) => ({ ...j, seconds: +j.seconds.toFixed(1) })),
      clicks
    };
    startTimer(); // resumes only if tab is still visible
    return payload;
  }

  function send() {
    const body = JSON.stringify(buildPayload());
    // text/plain body = no CORS preflight, works with Apps Script
    if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, body)) return;
    fetch(ENDPOINT, { method: 'POST', body, keepalive: true, mode: 'no-cors' }).catch(() => {});
  }

  // Send when user leaves / switches tab (most reliable, esp. on mobile).
  // Same session updates the same row, so multiple sends are fine.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopTimer(); send(); }
    else startTimer();
  });
  addEventListener('pagehide', send);
})();

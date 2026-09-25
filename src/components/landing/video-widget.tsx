"use client";

import { useEffect, useRef, useState } from "react";

/* ── icons as inline SVG to avoid any dep ── */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width={22} height={22}>
    <polygon points="5,3 19,12 5,21" />
  </svg>
);
const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width={15} height={15}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width={15} height={15}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width={15} height={15}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const VIDEO_SRC = "/HaulageOpsDemo_compressed.mp4";

export function VideoWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const mainRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);

  /* pause on tab hide */
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) mainRef.current?.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  /* close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const widget = document.getElementById("vw-root");
      if (widget && !widget.contains(e.target as Node)) handleMinimize();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => mainRef.current?.play().catch(() => {}), 100);
  };

  const handleMinimize = () => {
    mainRef.current?.pause();
    setOpen(false);
    setExpanded(false);
  };

  const handleClose = () => {
    mainRef.current?.pause();
    if (mainRef.current) mainRef.current.currentTime = 0;
    setOpen(false);
    setExpanded(false);
  };

  const handleExpand = () => setExpanded((p) => !p);

  /* ─── styles ─── */
  const s = {
    widget: {
      position: "fixed" as const,
      bottom: 28,
      right: 28,
      zIndex: 9990,
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "flex-end",
      gap: 12,
    },
    bubble: {
      position: "relative" as const,
      width: 76,
      height: 76,
      borderRadius: "50%",
      cursor: "pointer",
      filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.55))",
      transition: "transform 0.22s cubic-bezier(.34,1.56,.64,1)",
    },
    bubbleThumb: {
      width: 76,
      height: 76,
      borderRadius: "50%",
      overflow: "hidden" as const,
      border: "2.5px solid rgba(255,255,255,0.18)",
      background: "#0b0b0c",
      position: "relative" as const,
    },
    previewVid: {
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      borderRadius: "50%",
    },
    overlay: {
      position: "absolute" as const,
      inset: 0,
      borderRadius: "50%",
      background: "rgba(0,0,0,0.52)",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      backdropFilter: "blur(2px)",
    },
    playCircle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.15)",
      border: "1.5px solid rgba(255,255,255,0.3)",
    },
    bubbleLabel: {
      fontSize: 8.5,
      fontWeight: 600,
      color: "rgba(255,255,255,0.85)",
      letterSpacing: "0.04em",
      textTransform: "uppercase" as const,
    },
    badge: {
      position: "absolute" as const,
      top: -4,
      right: -4,
      background: "#ffffff",
      color: "#000",
      fontSize: 9,
      fontWeight: 700,
      borderRadius: 20,
      padding: "2px 6px",
      lineHeight: 1.4,
      boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
    },
    panel: {
      width: expanded ? "min(680px, 92vw)" : 360,
      borderRadius: 16,
      background: "#0d0d0f",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
      overflow: "hidden" as const,
      display: "flex",
      flexDirection: "column" as const,
      transformOrigin: "bottom right",
      animation: "vw-open 0.28s cubic-bezier(.34,1.56,.64,1) forwards",
      transition: "width 0.3s ease",
    },
    panelHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      background: "#111113",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      flexShrink: 0,
    },
    panelTitle: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12.5,
      fontWeight: 600,
      color: "rgba(255,255,255,0.88)",
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#22c55e",
      boxShadow: "0 0 6px rgba(34,197,94,0.7)",
    },
    controls: { display: "flex", alignItems: "center", gap: 4 },
    ctrlBtn: (danger?: boolean) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 26,
      height: 26,
      borderRadius: 6,
      background: "transparent",
      border: "none",
      color: "rgba(255,255,255,0.5)",
      cursor: "pointer",
    } as React.CSSProperties),
    panelBody: {
      flex: 1,
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mainVid: {
      width: "100%",
      display: "block",
      maxHeight: expanded ? "60vh" : 220,
      objectFit: "contain" as const,
      background: "#000",
      transition: "max-height 0.3s ease",
    },
    panelFooter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      background: "#111113",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      flexShrink: 0,
      gap: 10,
    },
    footerText: { fontSize: 11, color: "rgba(255,255,255,0.4)" },
    demoBtn: {
      padding: "6px 14px",
      fontSize: 12,
      borderRadius: 8,
      background: "#fff",
      color: "#000",
      border: "none",
      fontWeight: 700,
      cursor: "pointer",
      whiteSpace: "nowrap" as const,
      letterSpacing: "0.01em",
    },
  };

  return (
    <>
      {/* keyframes */}
      <style>{`
        @keyframes vw-open {
          from { opacity: 0; transform: scale(0.82) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @keyframes vw-ring {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.22); }
          60%      { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
        }
        @keyframes vw-shimmer {
          0%   { transform: translateX(-120%) skewX(-18deg); }
          100% { transform: translateX(220%)  skewX(-18deg); }
        }
        @keyframes vw-dot-blink {
          0%,100% { opacity:1; } 50% { opacity:0.3; }
        }
        .vw-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px 10px 10px;
          background: linear-gradient(135deg, #141416 0%, #1c1c20 100%);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 100px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.06) inset;
          transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s ease;
          animation: vw-ring 2.8s ease-in-out infinite;
          white-space: nowrap;
          user-select: none;
        }
        .vw-pill:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 40px rgba(0,0,0,0.65), 0 1px 0 rgba(255,255,255,0.1) inset;
        }
        .vw-pill::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          animation: vw-shimmer 3.2s ease-in-out infinite;
        }
        .vw-play-thumb {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(140deg, #fff 0%, #d4d4d8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 12px rgba(255,255,255,0.18);
          position: relative;
          z-index: 1;
        }
        .vw-play-thumb svg { margin-left: 3px; }
        .vw-pill-text { display: flex; flex-direction: column; gap: 1px; position: relative; z-index: 1; }
        .vw-pill-top { display: flex; align-items: center; gap: 6px; }
        .vw-pill-live-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px rgba(34,197,94,0.8);
          animation: vw-dot-blink 1.8s ease-in-out infinite;
          flex-shrink: 0;
        }
        .vw-pill-label {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }
        .vw-pill-sub {
          font-size: 10.5px;
          color: rgba(255,255,255,0.42);
          letter-spacing: 0.01em;
        }
        .vw-pill-chip {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 2px 8px;
          font-size: 10px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.04em;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .vw-ctrl:hover { background: rgba(255,255,255,0.1) !important; color: #fff !important; }
        .vw-ctrl-close:hover { background: rgba(239,68,68,0.18) !important; color: #ef4444 !important; }
      `}</style>

      <div id="vw-root" style={s.widget}>

        {/* ── Collapsed pill launcher ── */}
        {!open && (
          <div className="vw-pill" onClick={handleOpen} title="Watch the 90-second product demo">

            {/* Play button circle */}
            <div className="vw-play-thumb">
              <svg viewBox="0 0 24 24" fill="#000" width={18} height={18}>
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </div>

            {/* Text */}
            <div className="vw-pill-text">
              <div className="vw-pill-top">
                <span className="vw-pill-live-dot" />
                <span className="vw-pill-label">Watch Demo</span>
              </div>
              <span className="vw-pill-sub">Full platform walkthrough</span>
            </div>

            {/* Duration chip */}
            <span className="vw-pill-chip">1:30</span>

          </div>
        )}

        {/* ── Expanded player panel ── */}
        {open && (
          <div style={s.panel}>
            <div style={s.panelHeader}>
              <div style={s.panelTitle}>
                <div style={s.dot} />
                <span>HaulageOps — Product Demo</span>
              </div>
              <div style={s.controls}>
                <button className="vw-ctrl" style={s.ctrlBtn()} onClick={handleMinimize} title="Minimise">
                  <MinusIcon />
                </button>
                <button className="vw-ctrl" style={{ ...s.ctrlBtn(), color: expanded ? "#fff" : undefined }} onClick={handleExpand} title={expanded ? "Compact" : "Expand"}>
                  <ExpandIcon />
                </button>
                <button className="vw-ctrl vw-ctrl-close" style={s.ctrlBtn(true)} onClick={handleClose} title="Close">
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div style={s.panelBody}>
              <video ref={mainRef} src={VIDEO_SRC} controls playsInline preload="metadata" style={s.mainVid} />
            </div>

            <div style={s.panelFooter}>
              <span style={s.footerText}>Full platform walkthrough&nbsp;·&nbsp;1 min 30 sec</span>
              <button
                style={s.demoBtn}
                onClick={() => {
                  handleMinimize();
                  document.querySelector<HTMLElement>(".trigger-contact")?.click();
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

/* ==========================================================================
   HaulageOps Interactive Portal Logic & Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- Sticky Header Scroll Effect ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Navigation Menu ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    if (isOpen) {
      mobileToggle.innerHTML = '<i data-lucide="x"></i>';
    } else {
      mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
    }
    lucide.createIcons();
  });

  // Close mobile nav when clicking a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });
  });

  // --- Contact Slide Drawer ---
  const contactDrawerOverlay = document.getElementById('contact-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const triggerButtons = document.querySelectorAll('.trigger-contact');
  const inquiryForm = document.getElementById('inquiry-form');

  const openDrawer = () => {
    contactDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  };

  const closeDrawer = () => {
    contactDrawerOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
  };

  triggerButtons.forEach(btn => btn.addEventListener('click', openDrawer));
  drawerCloseBtn.addEventListener('click', closeDrawer);
  contactDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === contactDrawerOverlay) {
      closeDrawer();
    }
  });

  // Handle form submission via mailto link
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    const company = document.getElementById('client-company').value;
    const email = document.getElementById('client-email').value;
    const fleetSize = document.getElementById('fleet-size').value;
    const message = document.getElementById('client-message').value;

    const emailSubject = encodeURIComponent(`HaulageOps Demo Request - ${company}`);
    const emailBody = encodeURIComponent(
      `Hello HaulageOps Team,\n\n` +
      `I would like to request a demo of the Bulk Dispatch and Transport Management System.\n\n` +
      `--- Details ---\n` +
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Email: ${email}\n` +
      `Fleet Size: ${fleetSize} vehicles\n\n` +
      `--- Message ---\n` +
      `${message}\n\n` +
      `Best regards,\n` +
      `${name}`
    );

    // Trigger local email client
    window.location.href = `mailto:admin@haulageops.com?subject=${emailSubject}&body=${emailBody}`;

    // Show inline confirmation UI inside form
    const formContainer = inquiryForm.parentElement;
    const originalContent = formContainer.innerHTML;
    
    formContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background-color: var(--color-status-success-bg); color: var(--color-status-success); display: flex; align-items: center; justify-content: center; font-size: 32px;">
          <i data-lucide="check-circle-2" style="width: 32px; height: 32px;"></i>
        </div>
        <h4 style="font-size: 20px; font-weight: 600; color: white;">Email Draft Prepared!</h4>
        <p style="color: var(--color-text-secondary); font-size: 14px; line-height: 1.6; max-width: 300px;">
          Your email application has been opened with your inquiry pre-filled to <strong>admin@haulageops.com</strong>.
        </p>
        <p style="color: var(--color-text-muted); font-size: 12px; margin-top: 8px;">
          If your mail application didn't open automatically, please mail us directly at admin@haulageops.com.
        </p>
        <button class="btn btn-secondary" id="reset-inquiry" style="margin-top: 16px;">Send Another Message</button>
      </div>
    `;
    lucide.createIcons();

    document.getElementById('reset-inquiry').addEventListener('click', () => {
      formContainer.innerHTML = originalContent;
      // Re-register form submission
      // Note: Re-binding form listener is done by reloading or recursively calling.
      // Re-fetching the element works because we replaced the innerHTML.
      window.location.reload(); 
    });
  });


  // --- Portal Showcase Interactive Templates ---
  const mockupContainer = document.getElementById('mockup-body-root');
  const tabs = document.querySelectorAll('.portal-tab-btn');

  const portalTemplates = {
    dispatch: `
      <div class="view-dispatch">
        <div class="view-sidebar">
          <div class="sidebar-title">Active Dispatches</div>
          <div class="job-list">
            <div class="job-item active" data-job="9012">
              <div class="job-item-header">
                <span class="job-id">JOB-9012</span>
                <span class="job-status status-route">In Transit</span>
              </div>
              <div class="job-info">ABC Earthworks - Base Fill</div>
              <div class="job-route">Depot A &rarr; Site B (24km)</div>
            </div>
            <div class="job-item" data-job="8894">
              <div class="job-item-header">
                <span class="job-id">JOB-8894</span>
                <span class="job-status status-load">Loading</span>
              </div>
              <div class="job-info">Boral Concrete - Aggregate</div>
              <div class="job-route">Quarry C &rarr; Batch Plant 3</div>
            </div>
            <div class="job-item" data-job="9013">
              <div class="job-item-header">
                <span class="job-id">JOB-9013</span>
                <span class="job-status status-done">Delivered</span>
              </div>
              <div class="job-info">Holcim Group - Road Base</div>
              <div class="job-route">Quarry C &rarr; Roadworks Sec 4</div>
            </div>
          </div>
        </div>
        
        <div class="view-map-area">
          <!-- Styled Map SVG representation -->
          <svg class="map-placeholder-svg" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#050505" />
            <!-- Roads grid -->
            <path d="M 0,100 L 500,100 M 0,220 L 500,220 M 120,0 L 120,400 M 360,0 L 360,400 M 0,0 L 500,400" stroke="#1c1c1f" stroke-width="6" fill="none" />
            <path d="M 0,100 L 500,100 M 0,220 L 500,220 M 120,0 L 120,400 M 360,0 L 360,400 M 0,0 L 500,400" stroke="#000000" stroke-width="2" stroke-dasharray="8 8" fill="none" />
            
            <!-- Route Highlight -->
            <path d="M 120,100 L 220,180 L 360,220" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8" />
            
            <!-- Markers -->
            <!-- Source Depot -->
            <circle cx="120" cy="100" r="10" fill="#000000" stroke="#ffffff" stroke-width="2" />
            <circle cx="120" cy="100" r="3" fill="#ffffff" />
            <!-- Destination Site -->
            <circle cx="360" cy="220" r="10" fill="#000000" stroke="#ffffff" stroke-width="2" />
            <circle cx="360" cy="220" r="3" fill="#ffffff" />
            
            <!-- Driver Vehicle Truck Icon -->
            <g transform="translate(216, 173)">
              <circle cx="0" cy="0" r="12" fill="#ffffff" />
              <path d="M-5,-3 L5,-3 L3,4 L-3,4 Z" fill="#000000" />
              <circle cx="0" cy="0" r="16" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4 2">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite"/>
              </circle>
            </g>
          </svg>
          
          <div class="map-card-overlay">
            <div class="map-card-info">
              <h4 id="active-job-id">JOB-9012</h4>
              <p id="active-job-desc" style="font-size: 12px; color: var(--color-text-secondary);">ABC Earthworks &bull; Subcontractor #08</p>
            </div>
            <div class="map-card-stats">
              <div class="stat-item">
                <span class="stat-val" id="active-job-eta">12 min</span>
                <span class="stat-label">Est. Arrival</span>
              </div>
              <div class="stat-item">
                <span class="stat-val" id="active-job-qty">32.4 t</span>
                <span class="stat-label">Payload (Aggregate)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    
    driver: `
      <div class="view-driver">
        <div class="mobile-phone-frame">
          <div class="phone-screen">
            <div class="phone-header">
              <span class="phone-time">14:35</span>
              <div class="phone-header-icons">
                <i data-lucide="wifi" style="width: 14px; height: 14px;"></i>
                <i data-lucide="battery" style="width: 14px; height: 14px;"></i>
              </div>
            </div>
            
            <div class="driver-job-card" id="driver-job-screen">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--color-text-muted);">Active Job</span>
                <span style="padding: 2px 8px; border-radius: 99px; background-color: var(--color-status-success-bg); color: var(--color-status-success); font-size: 10px; font-weight: 500;">On Site</span>
              </div>
              
              <h3 class="driver-job-title">JOB-9012</h3>
              
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
                <div class="driver-detail-row">
                  <span class="driver-detail-label">Client</span>
                  <span class="driver-detail-value">ABC Earthworks</span>
                </div>
                <div class="driver-detail-row">
                  <span class="driver-detail-label">Product</span>
                  <span class="driver-detail-value">Blue Metal Aggregate</span>
                </div>
                <div class="driver-detail-row">
                  <span class="driver-detail-label">Target Weight</span>
                  <span class="driver-detail-value">32.4 Tonnes</span>
                </div>
                <div class="driver-detail-row">
                  <span class="driver-detail-label">Docket #</span>
                  <span class="driver-detail-value">DK-88271</span>
                </div>
              </div>
              
              <div class="driver-pod-box" id="pod-upload-box">
                <i data-lucide="camera" style="width: 20px; height: 20px;"></i>
                <span style="font-size: 11px; font-weight: 500;">Capture Docket / Photo POD</span>
                <span style="font-size: 9px; color: var(--color-text-muted);">Saved to Azure Blob Storage</span>
              </div>
              
              <div class="swipe-action-container" id="swipe-container">
                <div class="swipe-button" id="swipe-btn">
                  <i data-lucide="chevron-right" style="width: 18px; height: 18px;"></i>
                </div>
                <span class="swipe-text" id="swipe-lbl">Swipe to Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    
    subcontractor: `
      <div class="view-subcontractor">
        <div class="subcon-work-orders">
          <h3>Subcontractor Job Pool</h3>
          <p style="font-size: 12px; margin-bottom: 16px; color: var(--color-text-secondary);">Direct job delegation queue without phone calls.</p>
          
          <div class="subcon-order-card" id="subcon-card-1">
            <div class="subcon-order-header">
              <span class="job-id" style="color: white; font-size: 14px;">ORDER #662</span>
              <span class="subcon-price">$1,450.00</span>
            </div>
            <div style="font-size: 12px; color: var(--color-text-secondary);">2 Loads &bull; Sand Base Fill &bull; 64.0 Tonnes</div>
            <div class="subcon-route-line">
              <i data-lucide="map-pin" style="width: 12px; height: 12px;"></i>
              <span>Alexandria Depot &rarr; Mascot Runway Extension</span>
            </div>
            <button class="btn btn-secondary w-full" id="accept-subcon-job" style="padding: 8px 16px; font-size: 12px;">Accept Job</button>
          </div>
          
          <div class="subcon-order-card" style="opacity: 0.5;">
            <div class="subcon-order-header">
              <span class="job-id" style="font-size: 14px;">ORDER #663</span>
              <span class="subcon-price">$820.00</span>
            </div>
            <div style="font-size: 12px;">1 Load &bull; Excavated Soil &bull; 32.0 Tonnes</div>
            <div class="subcon-route-line">
              <i data-lucide="map-pin" style="width: 12px; height: 12px;"></i>
              <span>Parramatta Site 4 &rarr; Kemps Creek Tip</span>
            </div>
          </div>
        </div>
        
        <div class="view-subcon-map">
          <!-- Styled Subcontractor map svg -->
          <svg class="map-placeholder-svg" viewBox="0 0 250 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#050505" />
            <path d="M 0,80 L 250,80 M 0,200 L 250,200 M 80,0 L 80,300 M 180,0 L 180,300" stroke="#1c1c1f" stroke-width="4" fill="none" />
            <path d="M 80,80 L 150,150 L 180,200" stroke="#ffffff" stroke-width="3" fill="none" />
            <circle cx="80" cy="80" r="6" fill="#ffffff" />
            <circle cx="180" cy="200" r="6" fill="#ffffff" />
          </svg>
          <div class="subcon-map-overlay">Mapbox Routing Live</div>
        </div>
      </div>
    `,
    
    client: `
      <div class="view-client">
        <div class="client-main-panel">
          <div class="client-section-title">Client Job Tracking Portal</div>
          
          <div style="background-color: rgba(0,0,0,0.4); border: 1px solid var(--color-border-subtle); border-radius: 8px; overflow: hidden;">
            <table class="active-shipments-table">
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>Destination</th>
                  <th>Material</th>
                  <th>Status</th>
                  <th>ETA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-weight: 600;">JOB-9012</td>
                  <td>Site B (East Runway)</td>
                  <td>Aggregate 20mm</td>
                  <td><span class="job-status status-route">In Transit</span></td>
                  <td><span class="shipment-eta">14:47</span></td>
                </tr>
                <tr>
                  <td style="font-weight: 600;">JOB-8894</td>
                  <td>Batch Plant 3</td>
                  <td>Agg Sand</td>
                  <td><span class="job-status status-load">At Source</span></td>
                  <td><span class="shipment-eta">15:10</span></td>
                </tr>
                <tr>
                  <td style="font-weight: 600;">JOB-9011</td>
                  <td>Depot Alpha Yard</td>
                  <td>Fill Dirt</td>
                  <td><span class="job-status status-done">Delivered</span></td>
                  <td><span class="shipment-eta">Done</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="client-side-panel">
          <div class="client-rate-card-box">
            <h4 style="font-size: 13px; font-weight: 600; color: white; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 8px;">Active Rate Card</h4>
            <div class="client-rate-list">
              <div class="client-rate-item">
                <span class="rate-mat">Blue Metal 20mm</span>
                <span class="rate-val">$14.50 / t</span>
              </div>
              <div class="client-rate-item">
                <span class="rate-mat">Aggregate Sand</span>
                <span class="rate-val">$11.20 / t</span>
              </div>
              <div class="client-rate-item">
                <span class="rate-mat">Hourly Truck Rate</span>
                <span class="rate-val">$165.00 / hr</span>
              </div>
            </div>
            <div style="font-size: 10px; color: var(--color-text-muted); margin-top: 12px; text-align: center;">Effective Date: Jan 2026 - Dec 2026</div>
          </div>
        </div>
      </div>
    `,
    
    compliance: `
      <div class="view-compliance">
        <div class="compliance-status-row">
          <div class="comp-stat-card">
            <div class="comp-stat-icon">
              <i data-lucide="shield-check" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="comp-stat-info">
              <h4>100%</h4>
              <span>License Compliance</span>
            </div>
          </div>
          <div class="comp-stat-card">
            <div class="comp-stat-icon">
              <i data-lucide="clock" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="comp-stat-info">
              <h4>14 / 14</h4>
              <span>Fatigue Rest Checks</span>
            </div>
          </div>
          <div class="comp-stat-card">
            <div class="comp-stat-icon">
              <i data-lucide="link" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="comp-stat-info">
              <h4>OAuth2</h4>
              <span>Xero Live Sync</span>
            </div>
          </div>
        </div>
        
        <div class="comp-audit-box">
          <div class="comp-audit-header">
            <i data-lucide="history" style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 6px;"></i>
            <span>Real-time CoR Security Logs (Chain of Responsibility)</span>
          </div>
          <div class="comp-audit-list">
            <div class="comp-audit-item">
              <span class="comp-audit-time">14:32:01</span>
              <span class="comp-audit-text">Allocated JOB-9012 to ABC Earthworks. Subcontractor credentials verified.</span>
            </div>
            <div class="comp-audit-item">
              <span class="comp-audit-time">14:10:44</span>
              <span class="comp-audit-text">Driver John Doe logged 15-minute rest break (Australian fatigue rules compliance).</span>
            </div>
            <div class="comp-audit-item">
              <span class="comp-audit-time">13:55:00</span>
              <span class="comp-audit-text">Rate Card modification: "Holcim Base Roadworks" rate updated to $12.40/T. Effective date validated.</span>
            </div>
          </div>
        </div>
      </div>
    `
  };

  // Switch function for tabs
  const renderPortalView = (portalKey) => {
    mockupContainer.innerHTML = portalTemplates[portalKey] || '';
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    // Set URL bar text according to selected portal
    const urlBar = document.querySelector('.mockup-url');
    if (urlBar) {
      if (portalKey === 'driver') {
        urlBar.textContent = 'haulageops.com/driver-app';
      } else {
        urlBar.textContent = `app.haulageops.com/${portalKey}`;
      }
    }

    // Attach custom interactivity inside the newly injected HTML templates
    
    // --- 1. INTERACTION: Admin Dispatch list switching ---
    if (portalKey === 'dispatch') {
      const jobItems = document.querySelectorAll('.job-item');
      const activeJobId = document.getElementById('active-job-id');
      const activeJobDesc = document.getElementById('active-job-desc');
      const activeJobEta = document.getElementById('active-job-eta');
      const activeJobQty = document.getElementById('active-job-qty');
      
      const jobDetails = {
        '9012': { id: 'JOB-9012', desc: 'ABC Earthworks &bull; Subcontractor #08', eta: '12 min', qty: '32.4 t' },
        '8894': { id: 'JOB-8894', desc: 'Boral Concrete &bull; Vehicle #04', eta: '5 min', qty: '31.8 t' },
        '9013': { id: 'JOB-9013', desc: 'Holcim Group &bull; Subcontractor #11', eta: 'Delivered', qty: '28.0 t' }
      };

      jobItems.forEach(item => {
        item.addEventListener('click', () => {
          jobItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          
          const jobId = item.getAttribute('data-job');
          const details = jobDetails[jobId];
          
          if (details) {
            activeJobId.textContent = details.id;
            activeJobDesc.innerHTML = details.desc;
            activeJobEta.textContent = details.eta;
            activeJobQty.textContent = details.qty;
          }
        });
      });
    }

    // --- 2. INTERACTION: Driver Swipe Action ---
    if (portalKey === 'driver') {
      const swipeBtn = document.getElementById('swipe-btn');
      const swipeContainer = document.getElementById('swipe-container');
      const swipeLabel = document.getElementById('swipe-lbl');
      const driverJobScreen = document.getElementById('driver-job-screen');
      const podUpload = document.getElementById('pod-upload-box');
      
      let isDragging = false;
      let startX = 0;
      let maxDrag = 0;

      // Handle swipe simulation via pointer events for responsiveness
      const onStart = (e) => {
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
        maxDrag = swipeContainer.clientWidth - swipeBtn.clientWidth - 8;
      };

      const onMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX || (e.touches && e.touches[0].clientX);
        let deltaX = currentX - startX;
        if (deltaX < 0) deltaX = 0;
        if (deltaX > maxDrag) deltaX = maxDrag;
        
        swipeBtn.style.transform = `translateX(${deltaX}px)`;
        
        // Change color opacity based on drag
        const progress = deltaX / maxDrag;
        swipeContainer.style.backgroundColor = `rgba(255, 255, 255, ${0.05 + progress * 0.15})`;
      };

      const onEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        
        const currentX = parseInt(swipeBtn.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        if (currentX >= maxDrag * 0.8) {
          // Trigger complete action
          swipeBtn.style.transform = `translateX(${maxDrag}px)`;
          swipeBtn.style.backgroundColor = 'var(--color-status-success)';
          swipeLabel.textContent = 'Completed!';
          swipeLabel.style.color = '#ffffff';
          
          // Animate the card
          setTimeout(() => {
            driverJobScreen.innerHTML = `
              <div style="text-align: center; padding: 40px 10px; display: flex; flex-direction: column; align-items: center; gap: 16px; justify-content: center; height: 100%;">
                <div style="width: 48px; height: 48px; border-radius: 50%; background-color: var(--color-status-success-bg); color: var(--color-status-success); display: flex; align-items: center; justify-content: center;">
                  <i data-lucide="check" style="width: 24px; height: 24px;"></i>
                </div>
                <h4 style="font-size: 18px; font-weight: 600;">Docket Submitted</h4>
                <p style="color: var(--color-text-secondary); font-size: 12px; line-height: 1.5;">
                  Proof of delivery (Docket #DK-88271) has been archived and synced to Xero & Azure Blob Storage.
                </p>
                <button class="btn btn-secondary btn-sm" id="restart-driver-simulation" style="font-size: 11px; padding: 6px 12px;">Reset Demo</button>
              </div>
            `;
            lucide.createIcons();
            
            document.getElementById('restart-driver-simulation').addEventListener('click', () => {
              renderPortalView('driver');
            });
          }, 400);
        } else {
          // Spring back
          swipeBtn.style.transform = 'translateX(0px)';
          swipeContainer.style.backgroundColor = 'rgba(255,255,255,0.05)';
        }
      };

      // Pointer listeners
      swipeBtn.addEventListener('mousedown', onStart);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      
      // Touch listeners
      swipeBtn.addEventListener('touchstart', onStart);
      window.addEventListener('touchmove', onMove);
      window.addEventListener('touchend', onEnd);

      // Photo upload click simulation
      podUpload.addEventListener('click', () => {
        podUpload.style.borderColor = 'var(--color-status-success)';
        podUpload.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
        podUpload.innerHTML = `
          <i data-lucide="check" style="width: 20px; height: 20px; color: var(--color-status-success);"></i>
          <span style="font-size: 11px; font-weight: 500; color: white;">Docket Captured Successfully</span>
          <span style="font-size: 9px; color: var(--color-text-secondary);">Image: POD-88271.jpg</span>
        `;
        lucide.createIcons();
      });
    }

    // --- 3. INTERACTION: Subcontractor Job Accept ---
    if (portalKey === 'subcontractor') {
      const acceptBtn = document.getElementById('accept-subcon-job');
      const orderCard = document.getElementById('subcon-card-1');
      
      acceptBtn.addEventListener('click', () => {
        acceptBtn.disabled = true;
        acceptBtn.style.backgroundColor = 'var(--color-status-success-bg)';
        acceptBtn.style.color = 'var(--color-status-success)';
        acceptBtn.style.borderColor = 'var(--color-status-success)';
        acceptBtn.innerHTML = '<i data-lucide="check" style="width: 14px; height: 14px;"></i> Accepted';
        
        setTimeout(() => {
          orderCard.style.transition = 'opacity 0.5s ease';
          orderCard.style.opacity = '0.3';
          
          const title = orderCard.querySelector('h3') || orderCard.querySelector('.subcon-order-header');
          if (title) {
            const successText = document.createElement('div');
            successText.style.color = 'var(--color-status-success)';
            successText.style.fontSize = '12px';
            successText.style.fontWeight = '600';
            successText.style.marginTop = '6px';
            successText.innerHTML = 'Job successfully delegated to your driver (Truck #02)';
            orderCard.appendChild(successText);
          }
        }, 800);
      });
    }
  };

  // Tab click listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const portalKey = tab.getAttribute('data-portal');
      renderPortalView(portalKey);
    });
  });

  // Initial load view
  renderPortalView('dispatch');
});

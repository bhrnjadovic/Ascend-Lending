/* ══════════════════════════════════════════════════════════════
   ASCEND LENDING PARTNERS — components.js
   Shared navbar + footer injection for all product pages
══════════════════════════════════════════════════════════════ */
(function () {
    const inProducts = window.location.pathname.includes('/products/');
    const B = inProducts ? '../' : './';

    // ── Navbar HTML ──────────────────────────────────────────────
    const navHTML = `
<header class="navbar" id="navbar">
  <div class="container navbar__inner">
    <a href="${B}index.html" class="navbar__logo" aria-label="Ascend Lending Partners">
      <img src="${B}logo-new.svg" alt="Ascend Lending Partners" class="navbar__logo-img" style="height:38px;width:auto;" />
    </a>
    <nav class="navbar__nav" aria-label="Primary navigation">
      <div class="navbar__mega-wrapper">
        <button class="navbar__mega-trigger" id="megaTrigger" aria-expanded="false" aria-haspopup="true" aria-controls="megaMenu">
          Our Products
          <svg class="navbar__mega-chevron" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <a href="${B}index.html#process">How It Works</a>
      <a href="${B}index.html#why-ascend">Why Ascend</a>
      <a href="${B}index.html#contact">Contact</a>
    </nav>
    <a href="${B}index.html#get-started" class="btn btn--navy navbar__cta">Get Started</a>
    <button class="navbar__search-btn" id="searchBtn" aria-label="Search" aria-expanded="false">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    </button>
    <button class="navbar__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="navbar__mega" id="megaMenu" aria-hidden="true" role="navigation" aria-label="Our Products products">
    <div class="container">
      <div class="navbar__mega-inner">
        <div class="navbar__mega-col">
          <p class="navbar__mega-col-title">Business Loans</p>
          <a href="${B}products/business-loans.html">Business Loans</a>
          <a href="${B}products/small-business-loans.html">Small Business Loans</a>
          <a href="${B}products/unsecured-business-loans.html">Unsecured Business Loans</a>
          <a href="${B}products/secured-business-loans.html">Secured Business Loans</a>
          <a href="${B}products/low-doc-loans.html">Low Doc Loans</a>
          <a href="${B}products/high-doc-loans.html">Full Doc Loans</a>
        </div>
        <div class="navbar__mega-col">
          <p class="navbar__mega-col-title">Cash Flow & Working Capital</p>
          <a href="${B}products/business-line-of-credit.html">Business Line of Credit</a>
          <a href="${B}products/cashflow-loans.html">Cashflow Loans</a>
          <a href="${B}products/working-capital-loans.html">Working Capital Loans</a>
          <a href="${B}products/invoice-finance.html">Invoice Finance</a>
        </div>
        <div class="navbar__mega-col">
          <p class="navbar__mega-col-title">Specialist Finance</p>
          <a href="${B}products/equipment-finance.html">Equipment Finance</a>
          <a href="${B}products/trade-finance.html">Trade Finance</a>
          <a href="${B}products/ato-tax-debt-loans.html">ATO Tax Debt Finance</a>
          <a href="${B}products/short-term-business-loans.html">Short Term Business Loans</a>
          <a href="${B}products/bad-credit-business-loans.html">Bad Credit Business Loans</a>
        </div>
        <div class="navbar__mega-col">
          <p class="navbar__mega-col-title">Property Finance</p>
          <a href="${B}products/home-loans.html">Home Loans</a>
          <a href="${B}products/commercial-property-loans.html">Commercial Property</a>
          <a href="${B}products/bridging-finance.html">Bridging Finance</a>
        </div>
        <div class="navbar__mega-col">
          <p class="navbar__mega-col-title">Not sure where to start?</p>
          <p style="font-size:0.8rem;color:var(--steel);line-height:1.65;margin-bottom:1rem;">Talk to a specialist who understands complex commercial lending.</p>
          <a href="${B}index.html#get-started" class="btn btn--navy">Talk to a Specialist</a>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar__mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-accordion">
      <button class="mobile-accordion__trigger" id="mobileAccordionTrigger" aria-expanded="false">
        Our Products
        <svg class="mobile-accordion__chevron" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="mobile-accordion__panel" id="mobileAccordionPanel">
        <div class="mobile-accordion__grid">
          <div>
            <p class="mobile-accordion__col-title">Business Loans</p>
            <a href="${B}products/business-loans.html" class="mobile-sub-link">Business Loans</a>
            <a href="${B}products/small-business-loans.html" class="mobile-sub-link">Small Business</a>
            <a href="${B}products/unsecured-business-loans.html" class="mobile-sub-link">Unsecured Loans</a>
            <a href="${B}products/secured-business-loans.html" class="mobile-sub-link">Secured Loans</a>
            <a href="${B}products/low-doc-loans.html" class="mobile-sub-link">Low Doc Loans</a>
            <a href="${B}products/high-doc-loans.html" class="mobile-sub-link">Full Doc Loans</a>
          </div>
          <div>
            <p class="mobile-accordion__col-title">Cash Flow</p>
            <a href="${B}products/business-line-of-credit.html" class="mobile-sub-link">Line of Credit</a>
            <a href="${B}products/cashflow-loans.html" class="mobile-sub-link">Cashflow Loans</a>
            <a href="${B}products/working-capital-loans.html" class="mobile-sub-link">Working Capital</a>
            <a href="${B}products/invoice-finance.html" class="mobile-sub-link">Invoice Finance</a>
            <p class="mobile-accordion__col-title" style="margin-top:0.75rem">Specialist</p>
            <a href="${B}products/equipment-finance.html" class="mobile-sub-link">Equipment Finance</a>
            <a href="${B}products/trade-finance.html" class="mobile-sub-link">Trade Finance</a>
            <a href="${B}products/ato-tax-debt-loans.html" class="mobile-sub-link">ATO Tax Debt</a>
            <a href="${B}products/short-term-business-loans.html" class="mobile-sub-link">Short Term Loans</a>
            <a href="${B}products/bad-credit-business-loans.html" class="mobile-sub-link">Bad Credit Loans</a>
            <p class="mobile-accordion__col-title" style="margin-top:0.75rem">Property</p>
            <a href="${B}products/home-loans.html" class="mobile-sub-link">Home Loans</a>
            <a href="${B}products/commercial-property-loans.html" class="mobile-sub-link">Commercial Property</a>
            <a href="${B}products/bridging-finance.html" class="mobile-sub-link">Bridging Finance</a>
          </div>
        </div>
      </div>
    </div>
    <a href="${B}index.html#process" class="mobile-link">How It Works</a>
    <a href="${B}index.html#why-ascend" class="mobile-link">Why Ascend</a>
    <a href="${B}index.html#contact" class="mobile-link">Contact</a>
    <a href="${B}index.html#get-started" class="btn btn--navy mobile-cta">Get Started</a>
  </div>
</header>`;

    // ── Footer HTML ──────────────────────────────────────────────
    const footerHTML = `
<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <a href="${B}index.html" class="footer__logo" aria-label="Ascend Lending Partners home">
        <img src="${B}logo-footer.svg" alt="Ascend Lending Partners" class="footer__logo-img" style="height:38px;width:auto;" />
      </a>
      <p class="footer__tagline">Lending with Precision.</p>
    </div>
    <div class="footer__links">
      <div class="footer__col">
        <h4 class="footer__col-title">Business Finance</h4>
        <a href="${B}products/business-loans.html">Business Loans</a>
        <a href="${B}products/business-line-of-credit.html">Line of Credit</a>
        <a href="${B}products/unsecured-business-loans.html">Unsecured Loans</a>
        <a href="${B}products/equipment-finance.html">Equipment Finance</a>
        <a href="${B}products/invoice-finance.html">Invoice Finance</a>
        <a href="${B}products/ato-tax-debt-loans.html">ATO Tax Debt</a>
      </div>
      <div class="footer__col">
        <h4 class="footer__col-title">Company</h4>
        <a href="${B}index.html#why-ascend">About Us</a>
        <a href="${B}index.html#process">How It Works</a>
        <a href="${B}index.html#contact">Contact</a>
        <a href="${B}privacy-policy.html">Privacy Policy</a>
        <a href="${B}terms-of-service.html">Terms of Service</a>
      </div>
      <div class="footer__col">
        <h4 class="footer__col-title">Contact</h4>
        <a href="tel:+61409380558">+61 409 380 558</a>
        <a href="mailto:admin@ascendlending.com.au">admin@ascendlending.com.au</a>
        <span>Level 17, 175 Pitt Street</span>
        <span>Sydney, NSW 2000</span>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <p>&copy; 2025 Ascend Lending Partners. All rights reserved.</p>
      <p class="footer__disclaimer">General information only. Not financial advice. Credit subject to lender assessment and approval criteria. Ascend Lending Partners operates as a referral introducer only and does not hold an Australian Credit Licence. We may receive a referral fee from lenders upon settlement.</p>
    </div>
  </div>
</footer>`;

    // ── Inject ───────────────────────────────────────────────────
    const navPh = document.getElementById('navbar-placeholder');
    if (navPh) navPh.outerHTML = navHTML;
    const ftPh = document.getElementById('footer-placeholder');
    if (ftPh) ftPh.outerHTML = footerHTML;

    // ── Search overlay inject ────────────────────────────────────
    const searchOverlay = document.createElement('div');
    searchOverlay.id = 'searchOverlay';
    searchOverlay.className = 'search-overlay';
    searchOverlay.setAttribute('aria-hidden', 'true');
    searchOverlay.setAttribute('role', 'dialog');
    searchOverlay.setAttribute('aria-label', 'Site search');
    searchOverlay.innerHTML = `
      <div class="search-overlay__backdrop" id="searchBackdrop"></div>
      <div class="search-overlay__panel">
        <div class="search-overlay__header">
          <div class="search-overlay__input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input type="text" id="searchInput" class="search-overlay__input" placeholder="Search for a product or topic..." autocomplete="off" spellcheck="false" />
            <button class="search-overlay__clear" id="searchClear" aria-label="Clear search" style="display:none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <button class="search-overlay__close" id="searchClose" aria-label="Close search">ESC</button>
        </div>
        <div class="search-overlay__results" id="searchResults">
          <p class="search-overlay__hint">Start typing to search pages and products…</p>
        </div>
      </div>
    `;
    document.body.appendChild(searchOverlay);

    // ── Mega menu ────────────────────────────────────────────────
    (function () {
        const trigger = document.getElementById('megaTrigger');
        const panel   = document.getElementById('megaMenu');
        const wrapper = trigger && trigger.closest('.navbar__mega-wrapper');
        if (!trigger || !panel) return;
        let hideTimer;
        const openMenu  = () => { clearTimeout(hideTimer); panel.classList.add('is-open'); trigger.setAttribute('aria-expanded','true'); panel.setAttribute('aria-hidden','false'); };
        const closeMenu = () => { hideTimer = setTimeout(() => { panel.classList.remove('is-open'); trigger.setAttribute('aria-expanded','false'); panel.setAttribute('aria-hidden','true'); }, 120); };
        wrapper.addEventListener('mouseenter', openMenu);
        wrapper.addEventListener('mouseleave', closeMenu);
        panel.addEventListener('mouseenter', () => clearTimeout(hideTimer));
        panel.addEventListener('mouseleave', closeMenu);
        trigger.addEventListener('click', () => panel.classList.contains('is-open') ? closeMenu() : openMenu());
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && panel.classList.contains('is-open')) { closeMenu(); trigger.focus(); } });
        document.addEventListener('click', (e) => { if (!panel.contains(e.target) && !wrapper.contains(e.target)) closeMenu(); });
    })();

    // ── Mobile accordion ─────────────────────────────────────────
    const mAccTrigger = document.getElementById('mobileAccordionTrigger');
    const mAccPanel   = document.getElementById('mobileAccordionPanel');
    if (mAccTrigger && mAccPanel) {
        mAccTrigger.addEventListener('click', () => {
            const isOpen = mAccPanel.classList.contains('is-open');
            mAccPanel.classList.toggle('is-open', !isOpen);
            mAccTrigger.classList.toggle('is-open', !isOpen);
            mAccTrigger.setAttribute('aria-expanded', String(!isOpen));
        });
    }

    // ── Navbar JS ────────────────────────────────────────────────
    const navbar  = document.getElementById('navbar');
    const burger  = document.getElementById('hamburger');
    const mobMenu = document.getElementById('mobileMenu');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('navbar--scrolled', window.scrollY > 60);
        }, { passive: true });
    }
    if (burger && mobMenu) {
        burger.addEventListener('click', () => {
            const open = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', String(!open));
            mobMenu.setAttribute('aria-hidden', String(open));
            burger.classList.toggle('is-open', !open);
            mobMenu.classList.toggle('is-open', !open);
        });
        document.querySelectorAll('.mobile-link, .mobile-cta').forEach(l => {
            l.addEventListener('click', () => {
                burger.setAttribute('aria-expanded', 'false');
                mobMenu.setAttribute('aria-hidden', 'true');
                burger.classList.remove('is-open');
                mobMenu.classList.remove('is-open');
            });
        });
    }

    // ── Smooth scroll ────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) {
                e.preventDefault();
                window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }
        });
    });

    // ── FAQ accordion ────────────────────────────────────────────
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const wasOpen = item.classList.contains('is-open');
            document.querySelectorAll('.faq-item.is-open').forEach(i => i.classList.remove('is-open'));
            if (!wasOpen) item.classList.add('is-open');
        });
    });

    // ── Scroll-reveal ────────────────────────────────────────────
    const revealSel = '.benefit-card,.for-card,.faq-item,.related-card,.elig-item,.process__step,.why-card,.trust-stat,.prod-stat-card';
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll(revealSel).forEach(el => obs.observe(el));

    // ── Search ───────────────────────────────────────────────────
    (function () {
        const BASE = (function() {
            const scripts = document.getElementsByTagName('script');
            const src = scripts[scripts.length - 1].src;
            return src.includes('/products/') ? '../' : '';
        })();

        const PAGES = [
            { title: 'Business Loans', desc: 'Commercial loans for expansion, acquisition, equipment and more.', url: BASE + 'products/business-loans.html', tags: 'business loan commercial finance borrow capital' },
            { title: 'Business Line of Credit', desc: 'Flexible revolving credit facility for ongoing business needs.', url: BASE + 'products/business-line-of-credit.html', tags: 'line of credit revolving facility draw down' },
            { title: 'Unsecured Business Loans', desc: 'No property security required — approved on business performance.', url: BASE + 'products/unsecured-business-loans.html', tags: 'unsecured no security fast approval' },
            { title: 'Secured Business Loans', desc: 'Asset-backed lending for larger amounts and better rates.', url: BASE + 'products/secured-business-loans.html', tags: 'secured property asset backed collateral' },
            { title: 'Small Business Loans', desc: 'Finance tailored for small business operators and sole traders.', url: BASE + 'products/small-business-loans.html', tags: 'small business SME sole trader startup' },
            { title: 'Low Doc Loans', desc: 'Minimal documentation — ideal for self-employed and ABN holders.', url: BASE + 'products/low-doc-loans.html', tags: 'low doc self employed ABN no financials' },
            { title: 'High Doc Loans', desc: 'Full documentation loans for the most competitive rates.', url: BASE + 'products/high-doc-loans.html', tags: 'full doc high doc financials tax returns' },
            { title: 'Short Term Business Loans', desc: 'Fast funding for urgent or short-term business requirements.', url: BASE + 'products/short-term-business-loans.html', tags: 'short term urgent fast quick same day' },
            { title: 'Cashflow Loans', desc: 'Bridge cash flow gaps and keep operations running smoothly.', url: BASE + 'products/cashflow-loans.html', tags: 'cashflow working capital gap bridge' },
            { title: 'Working Capital Loans', desc: 'Fund day-to-day operations and manage seasonal fluctuations.', url: BASE + 'products/working-capital-loans.html', tags: 'working capital operations seasonal stock' },
            { title: 'Invoice Finance', desc: 'Unlock cash tied up in outstanding invoices immediately.', url: BASE + 'products/invoice-finance.html', tags: 'invoice debtor factoring accounts receivable' },
            { title: 'Equipment Finance', desc: 'Fund machinery, vehicles and equipment without cash outlay.', url: BASE + 'products/equipment-finance.html', tags: 'equipment machinery vehicle truck asset' },
            { title: 'Trade Finance', desc: 'Finance for importing, exporting and international trade.', url: BASE + 'products/trade-finance.html', tags: 'trade import export international supply' },
            { title: 'ATO Tax Debt Finance', desc: 'Clear ATO debt fast and avoid default listings.', url: BASE + 'products/ato-tax-debt-loans.html', tags: 'ATO tax debt payment plan overdue BAS GST' },
            { title: 'Bad Credit Business Loans', desc: 'Finance for businesses with defaults, judgments or complex credit.', url: BASE + 'products/bad-credit-business-loans.html', tags: 'bad credit default judgment declined bankruptcy' },
            { title: 'Home Loans', desc: 'Owner-occupier, investor, and self-employed home loan options.', url: BASE + 'products/home-loans.html', tags: 'home loan mortgage residential first home buyer refinance' },
            { title: 'Commercial Property Loans', desc: 'Finance for offices, warehouses, retail and industrial property.', url: BASE + 'products/commercial-property-loans.html', tags: 'commercial property office warehouse retail industrial' },
            { title: 'Bridging Finance', desc: 'Short-term property-secured loans for urgent or interim needs.', url: BASE + 'products/bridging-finance.html', tags: 'bridging short term property gap auction cash flow' },
            { title: 'Privacy Policy', desc: 'How we collect and protect your personal information.', url: BASE + 'privacy-policy.html', tags: 'privacy policy data personal information' },
            { title: 'Terms of Service', desc: 'Terms governing use of the Ascend Lending Partners website.', url: BASE + 'terms-of-service.html', tags: 'terms conditions service legal' },
            { title: 'Contact Us', desc: 'Get in touch with a specialist within 2 business hours.', url: BASE + 'index.html#contact', tags: 'contact enquire phone email specialist' },
            { title: 'How It Works', desc: 'Our 4-step process from enquiry to funding.', url: BASE + 'index.html#process', tags: 'how process steps apply approval funding' },
            { title: 'Why Ascend', desc: 'Why businesses choose Ascend Lending Partners.', url: BASE + 'index.html#why-ascend', tags: 'why choose about us lenders panel' },
        ];

        function search(query) {
            if (!query || query.length < 2) return [];
            const q = query.toLowerCase();
            return PAGES.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.desc.toLowerCase().includes(q) ||
                p.tags.toLowerCase().includes(q)
            ).slice(0, 6);
        }

        function renderResults(results, query) {
            const el = document.getElementById('searchResults');
            if (!el) return;
            if (!query || query.length < 2) {
                el.innerHTML = '<p class="search-overlay__hint">Start typing to search pages and products…</p>';
                return;
            }
            if (results.length === 0) {
                el.innerHTML = '<p class="search-overlay__hint">No results found. Try a different term.</p>';
                return;
            }
            el.innerHTML = results.map(r => `
                <a href="${r.url}" class="search-result">
                    <div class="search-result__title">${r.title}</div>
                    <div class="search-result__desc">${r.desc}</div>
                </a>
            `).join('');
        }

        function openSearch() {
            const overlay = document.getElementById('searchOverlay');
            const input   = document.getElementById('searchInput');
            if (!overlay) return;
            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            setTimeout(() => input && input.focus(), 50);
        }

        function closeSearch() {
            const overlay = document.getElementById('searchOverlay');
            const input   = document.getElementById('searchInput');
            const clear   = document.getElementById('searchClear');
            const results = document.getElementById('searchResults');
            if (!overlay) return;
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (input) input.value = '';
            if (clear) clear.style.display = 'none';
            if (results) results.innerHTML = '<p class="search-overlay__hint">Start typing to search pages and products…</p>';
        }

        // Wire up events after a tick to ensure DOM is ready
        setTimeout(() => {
            const btn      = document.getElementById('searchBtn');
            const closeBtn = document.getElementById('searchClose');
            const backdrop = document.getElementById('searchBackdrop');
            const input    = document.getElementById('searchInput');
            const clearBtn = document.getElementById('searchClear');

            if (btn)      btn.addEventListener('click', openSearch);
            if (closeBtn) closeBtn.addEventListener('click', closeSearch);
            if (backdrop) backdrop.addEventListener('click', closeSearch);

            if (input) {
                input.addEventListener('input', () => {
                    const q = input.value.trim();
                    if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';
                    renderResults(search(q), q);
                });
            }
            if (clearBtn) clearBtn.addEventListener('click', () => {
                if (input) { input.value = ''; input.focus(); }
                clearBtn.style.display = 'none';
                renderResults([], '');
            });

            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') closeSearch();
                if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
            });
        }, 100);
    })();

    // ── Loaded ───────────────────────────────────────────────────
    document.body.classList.add('loaded');
})();

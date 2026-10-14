/* ==========================================================================
   Haider Tutors — shared app behaviour (ht-app.js)
   - responsive portal shell (mobile drawer nav)
   - toast notifications
   - client-side filtering for listing/request/application cards (demo data)
   - honest prototype form handling (no fake backend claims)
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function params() { return new URLSearchParams(window.location.search); }

  /* ---------- toast ---------- */
  function toast(msg) {
    var t = document.createElement('div');
    t.setAttribute('role', 'status');
    t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(16px);' +
      'background:#145A5A;color:#fff;font:600 14px/1.4 "Plus Jakarta Sans",sans-serif;' +
      'padding:12px 20px;border-radius:14px;z-index:9999;max-width:min(92vw,480px);text-align:center;' +
      'box-shadow:6px 8px 20px rgba(20,90,90,.28);opacity:0;transition:all .3s ease;';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; });
    setTimeout(function () {
      t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(function () { t.remove(); }, 350);
    }, 3200);
  }
  window.htToast = toast;

  /* ---------- responsive portal shell ---------- */
  function initShell() {
    var aside = document.querySelector('body > aside.fixed');
    var shell = document.querySelector('div.pl-72');
    var topbar = document.querySelector('header.fixed');
    if (!aside || !shell || !topbar) return; // not a portal page

    aside.classList.add('ht-sidebar');
    shell.classList.add('ht-shell');
    topbar.classList.add('ht-topbar');

    // tag the header search wrapper so it can be hidden on mobile
    var searchInput = topbar.querySelector('input[type="text"]');
    if (searchInput && searchInput.closest('div')) {
      var wrap = searchInput.closest('div.relative') || searchInput.parentElement;
      if (wrap) wrap.classList.add('ht-searchwrap');
    }

    // hamburger button (CSS shows it only < 1024px)
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ht-menu-btn';
    btn.setAttribute('aria-label', 'Open navigation');
    btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:24px">menu</span>';
    btn.style.cssText = 'align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;' +
      'background:#fff;color:#145A5A;border:1px solid #DCE7E2;flex-shrink:0;' +
      'box-shadow:3px 3px 8px rgba(20,90,90,.08);cursor:pointer;margin-right:8px;';
    topbar.insertBefore(btn, topbar.firstChild);

    var scrim = null;
    function openNav() {
      document.body.classList.add('ht-nav-open');
      if (!scrim) {
        scrim = document.createElement('div');
        scrim.className = 'ht-nav-scrim';
        scrim.addEventListener('click', closeNav);
        document.body.appendChild(scrim);
      }
      scrim.style.display = 'block';
      btn.setAttribute('aria-label', 'Close navigation');
    }
    function closeNav() {
      document.body.classList.remove('ht-nav-open');
      if (scrim) scrim.style.display = 'none';
      btn.setAttribute('aria-label', 'Open navigation');
    }
    btn.addEventListener('click', function () {
      document.body.classList.contains('ht-nav-open') ? closeNav() : openNav();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
    $all('aside a', document).forEach(function (a) { a.addEventListener('click', closeNav); });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) closeNav();
    });
  }

  /* ---------- client-side card filtering (demo data) ---------- */
  // Usage: container [data-filter-group] with items [data-filter="..."] and
  // buttons [data-filter-btn="value"] inside [data-filter-controls].
  function initFilters() {
    $all('[data-filter-group]').forEach(function (group) {
      var controls = group.parentElement.querySelector('[data-filter-controls]') || document;
      var buttons = $all('[data-filter-btn]', controls);
      if (!buttons.length) return;
      var searchInput = $all('[data-filter-search]', controls)[0];
      var emptyMsg = group.parentElement.querySelector('[data-filter-empty]');

      function apply() {
        var activeBtn = $all('[data-filter-btn].is-active', controls)[0];
        var f = activeBtn ? activeBtn.getAttribute('data-filter-btn') : 'all';
        var q = searchInput ? searchInput.value.trim().toLowerCase() : '';
        var visible = 0;
        $all('[data-filter]', group).forEach(function (item) {
          var tags = (item.getAttribute('data-filter') || '').toLowerCase();
          var okF = (f === 'all') || tags.indexOf(f.toLowerCase()) !== -1;
          var okQ = !q || tags.indexOf(q) !== -1;
          var show = okF && okQ;
          item.style.display = show ? '' : 'none';
          if (show) visible++;
        });
        if (emptyMsg) emptyMsg.style.display = visible ? 'none' : '';
      }

      buttons.forEach(function (b) {
        b.addEventListener('click', function () {
          buttons.forEach(function (x) { x.classList.remove('is-active'); });
          b.classList.add('is-active');
          apply();
        });
      });
      if (searchInput) searchInput.addEventListener('input', apply);
      apply();
    });
  }

  /* ---------- draft saving (local only, stated honestly) ---------- */
  function initDraftButtons() {
    $all('[data-save-draft]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var form = btn.closest('form') || document;
        var data = {};
        $all('input, select, textarea', form).forEach(function (el) {
          if (el.name || el.id) data[el.name || el.id] = el.value;
        });
        try {
          localStorage.setItem('ht-draft-' + (btn.getAttribute('data-save-draft') || 'form'), JSON.stringify(data));
          toast('Draft saved in this browser only (demo preview — not sent to any server).');
        } catch (e) { toast('Could not save the draft in this browser.'); }
      });
    });
  }

  /* ---------- active nav highlighting ---------- */
  function initActiveNav() {
    var file = window.location.pathname.split('/').pop().split('?')[0] || 'index.html';
    var map = {
      'dashboard.html': ['dashboard'], 'submit-tuition.html': ['submit-tuition'],
      'my-requests.html': ['my-requests'], 'request-details.html': ['my-requests'],
      'profile.html': ['my-profile', 'my-tutor-profile', 'profile'],
      'listings.html': ['listings', 'tuition-listings'], 'tuition-details.html': ['listings', 'tuition-listings'],
      'applications.html': ['applications', 'my-applications'], 'application-details.html': ['applications', 'my-applications'],
      'apply.html': ['listings', 'tuition-listings'],
      'application-confirmation.html': ['applications', 'my-applications'],
    };
    var keys = map[file];
    if (!keys) return;
    $all('aside nav a[data-path]').forEach(function (a) {
      var p = a.getAttribute('data-path');
      var on = keys.indexOf(p) !== -1;
      a.removeAttribute('aria-current');
      if (on) {
        a.setAttribute('aria-current', 'page');
        var nav = a.closest('nav');
        var activeCls = (nav && nav.getAttribute('data-active-classes')) || '';
        if (activeCls) {
          activeCls.split(' ').forEach(function (c) { if (c) a.classList.add(c); });
        }
      } else {
        var nav2 = a.closest('nav');
        var activeCls2 = (nav2 && nav2.getAttribute('data-active-classes')) || '';
        if (activeCls2) activeCls2.split(' ').forEach(function (c) { if (c) a.classList.remove(c); });
      }
    });
  }

  /* ---------- honest demo actions (delegated) ----------
     [data-ht-demo] shows an explanatory toast; [data-ht-scroll] smooth-scrolls
     to a target. For controls with no backend in this preview. */
  function initDemoActions() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-ht-demo], [data-ht-scroll]');
      if (!t) return;
      var sc = t.getAttribute('data-ht-scroll');
      if (sc) {
        var el = document.querySelector(sc);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      var msg = t.getAttribute('data-ht-demo');
      if (msg) toast(msg);
    });
  }

  /* ---------- query-param conveniences ---------- */
  window.htParams = params;

  document.addEventListener('DOMContentLoaded', function () {
    try { initShell(); } catch (e) {}
    try { initFilters(); } catch (e) {}
    try { initDraftButtons(); } catch (e) {}
    try { initActiveNav(); } catch (e) {}
    try { initDemoActions(); } catch (e) {}
  });
})();

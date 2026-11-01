// Burger + défilement doux (externalisé pour la CSP : script-src 'self',
// aucun script inline dans le HTML — voir public/_headers).
document.addEventListener('click', function (e) {
  var t = e.target && e.target.closest ? e.target.closest('[data-action="toggle-menu"]') : null;
  if (t) {
    var h = t.closest('header.site');
    if (h) {
      var ouvert = h.classList.toggle('menu-ouvert');
      t.setAttribute('aria-expanded', String(ouvert));
    }
    return;
  }
  var s = e.target && e.target.closest ? e.target.closest('[data-scroll]') : null;
  if (s) {
    var c = document.getElementById(s.getAttribute('data-scroll'));
    if (c) {
      var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      c.scrollIntoView({ behavior: reduit ? 'auto' : 'smooth', block: 'start' });
      if (c.focus) c.focus({ preventScroll: true });
    }
  }
});

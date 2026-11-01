/**
 * Chrome du site : header, footer, gabarit de page.
 * Reçoit tous les textes en paramètres (aucun libellé français en dur ici).
 * @module components/layout
 */
import { escapeHtml, safeUrl } from '../lib/format.js';

const ICON_INSTAGRAM = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"/></svg>';
const ICON_TIKTOK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.4 2 1.8 3.6 3.9 3.8v3c-1.5 0-2.9-.5-3.9-1.3v6.1c0 3.4-2.6 6.1-6 6.1-3.3 0-6-2.7-6-6.1s2.7-6 6-6c.3 0 .7 0 1 .1v3.1c-.3-.1-.7-.2-1-.2-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3c1.7 0 3-1.3 3-3V3h2.9z"/></svg>';

/**
 * @param {{ activeId: string, site: object, nav: Array<{id:string,label:string,hash:string}>, copy: object }} args
 * @returns {string}
 */
export function renderHeader(args) {
  const activeId = args.activeId;
  const site = args.site;
  const nav = args.nav;
  const copy = args.copy;
  let links = '';
  for (const item of nav) {
    const actif = item.id === activeId ? ' class="actif" aria-current="page"' : '';
    links += '<a href="' + escapeHtml(item.hash) + '"' + actif + '>' + escapeHtml(item.label) + '</a>';
  }
  return (
    '<header class="site">' +
    '<button type="button" class="burger" data-action="toggle-menu" aria-label="' + escapeHtml(copy.menuLabel) + '" aria-expanded="false">☰</button>' +
    '<nav class="main" aria-label="' + escapeHtml(copy.navMainLabel) + '">' + links + '</nav>' +
    '<a class="logo" href="#/" aria-label="' + escapeHtml(copy.brandHomeLabel) + '"><span class="nom">' + escapeHtml(site.brandName) + '</span><small>' + escapeHtml(site.brandSuffix) + '</small></a>' +
    '<div class="social">' + escapeHtml(copy.followUs) +
    ' <a href="' + escapeHtml(safeUrl(site.instagramUrl)) + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICON_INSTAGRAM + '</a>' +
    ' <a href="' + escapeHtml(safeUrl(site.tiktokUrl)) + '" target="_blank" rel="noopener" aria-label="TikTok">' + ICON_TIKTOK + '</a>' +
    '</div></header>'
  );
}

/**
 * @param {{ site: object, navSecondary: Array, legalLinks: Array, copy: object }} args
 * @returns {string}
 */
export function renderFooter(args) {
  const site = args.site;
  const copy = args.copy;
  let nav = '';
  for (const item of args.navSecondary) {
    if (nav !== '') nav += ' · ';
    nav += '<a href="' + escapeHtml(item.hash) + '">' + escapeHtml(item.label) + '</a>';
  }
  let legal = '';
  for (const item of args.legalLinks) {
    if (legal !== '') legal += ' · ';
    legal += '<a href="' + escapeHtml(item.hash) + '">' + escapeHtml(item.label) + '</a>';
  }
  return (
    '<footer class="site"><div class="wrap">' +
    '<p class="coeur-centre" aria-hidden="true">♡</p>' +
    '<div class="cols">' +
    '<section aria-label="' + escapeHtml(copy.brandSectionLabel) + '"><a class="logo" href="#/"><span class="nom">' + escapeHtml(site.brandName) + '</span><small>' + escapeHtml(site.brandSuffix) + '</small></a><br/>' + escapeHtml(site.copyright) + '</section>' +
    '<nav class="main" aria-label="' + escapeHtml(copy.navSecondaryLabel) + '">' + nav + '</nav>' +
    '<section class="droite" aria-label="' + escapeHtml(copy.contactSectionLabel) + '">' + escapeHtml(copy.followUs) +
    ' <a href="' + escapeHtml(safeUrl(site.instagramUrl)) + '" target="_blank" rel="noopener">Instagram</a> · ' +
    '<a href="' + escapeHtml(safeUrl(site.tiktokUrl)) + '" target="_blank" rel="noopener">TikTok</a><br/>' + escapeHtml(site.location) +
    '<br/><span class="note">' + legal + '</span></section>' +
    '</div></div></footer>'
  );
}

/**
 * Gabarit : header + main + footer.
 * @param {{ activeId: string, mainHtml: string, site: object, nav: Array, navSecondary: Array, legalLinks: Array, copy: object }} args
 * @returns {string}
 */
export function renderLayout(args) {
  return (
    '<div class="page">' +
    renderHeader({ activeId: args.activeId, site: args.site, nav: args.nav, copy: args.copy }) +
    '<main>' + args.mainHtml + '</main>' +
    renderFooter({ site: args.site, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.copy }) +
    '</div>'
  );
}

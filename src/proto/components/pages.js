/**
 * Pages du site : fonctions pures (données + copie en entrée, HTML en sortie).
 * Aucun import de contenu ici : tout est injecté par src/app.js (composition root).
 * @module components/pages
 */
import { escapeHtml, formatPrice, safeUrl } from '../lib/format.js';
import { renderLayout } from './layout.js';
import { renderProductCard, renderProductGrid } from './product.js';

/**
 * @param {object} args
 * @param {object} args.site
 * @param {object} args.chrome
 * @param {Array} args.nav
 * @param {Array} args.navSecondary
 * @param {Array} args.legalLinks
 * @param {object} args.copy
 * @param {Array} args.products
 * @returns {string}
 */
export function renderHomePage(args) {
  const site = args.site;
  const copy = args.copy;
  const coups = args.products.filter(function (p) { return p.featured; }).slice(0, 4);
  const instaRefs = [args.products[0], args.products[9], args.products[10], args.products[2]].filter(Boolean);

  let reassurance = '';
  for (const item of copy.reassurance) {
    reassurance += '<li class="item"><span class="ico" aria-hidden="true">' + escapeHtml(item.icon) + '</span>' + escapeHtml(item.text) + '</li>';
  }
  let insta = '';
  for (const p of instaRefs) {
    insta += '<li><img src="' + escapeHtml(safeUrl(p.image)) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" /></li>';
  }

  const main =
    '<section class="hero" aria-label="' + escapeHtml(copy.heroSectionLabel) + '">' +
    '<img class="fond" src="src/images/hero-banner.jpg" alt="' + escapeHtml(copy.heroAlt) + '" />' +
    '<div class="voile" aria-hidden="true"></div>' +
    '<div class="texte">' +
    '<h1 class="marque">' + escapeHtml(site.brandName) + '<small>' + escapeHtml(site.brandSuffix) + '</small></h1>' +
    '<p class="coeur" aria-hidden="true">♡</p>' +
    '<p class="signature">' + escapeHtml(site.tagline) + '</p>' +
    '<p><a class="btn contour" href="#/collection">' + escapeHtml(copy.heroCta) + '</a></p>' +
    '</div></section>' +
    '<section class="bandeau" aria-label="' + escapeHtml(copy.reassuranceLabel) + '"><ul class="wrap">' + reassurance + '</ul></section>' +
    '<div class="wrap">' +
    '<div class="titre-ligne"><h2>' + escapeHtml(copy.coupsTitle) + '</h2><a href="#/collection">' + escapeHtml(copy.coupsLink) + '</a></div>' +
    '<div class="filet" aria-hidden="true"></div><p class="coeur-centre" aria-hidden="true">♡</p>' +
    renderProductGrid(coups) +
    '</div>' +
    '<section class="bandeau-histoire" aria-label="' + escapeHtml(copy.histoireLabel) + '">' +
    '<img src="src/images/un-bijou-une-histoire.jpg" alt="' + escapeHtml(copy.histoireImgAlt) + '" loading="lazy" />' +
    '<div class="texte"><p><a class="btn contour" href="#/a-propos">' + escapeHtml(copy.histoireCta) + '</a></p></div>' +
    '</section>' +
    '<div class="wrap"><section class="insta" aria-label="' + escapeHtml(copy.instaLabel) + '">' +
    '<p class="handle">' + escapeHtml(site.instagramHandle) + '</p>' +
    '<p class="sous-titre">' + escapeHtml(copy.instaCta) + '</p>' +
    '<ul class="photos">' + insta + '</ul>' +
    '</section></div>' +
    '<section class="bandeau-reseaux" aria-label="' + escapeHtml(copy.reseauxLabel) + '">' +
    '<img src="src/images/banniere-reseaux.jpg" alt="' + escapeHtml(copy.reseauxImgAlt) + '" loading="lazy" />' +
    '<div class="contenu"><h2>' + escapeHtml(copy.reseauxTitle) + '</h2>' +
    '<p>' + escapeHtml(copy.reseauxText) + '</p>' +
    '<p><a class="btn second" href="' + escapeHtml(site.instagramUrl) + '" target="_blank" rel="noopener">' +
    escapeHtml(copy.reseauxCtaPrefix) + ' ' + escapeHtml(site.instagramHandle) + ' ' + escapeHtml(copy.reseauxCtaSuffix) + '</a></p>' +
    '</div></section>';

  return renderLayout({ activeId: 'home', mainHtml: main, site: site, nav: args.nav, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.chrome });
}

/**
 * @param {object} args
 * @returns {string}
 */
export function renderCollectionPage(args) {
  const copy = args.copy;
  const active = args.categoryId || 'tous';
  const list = args.categoryId && args.categoryId !== 'tous'
    ? args.products.filter(function (p) { return p.cat === args.categoryId; })
    : args.products;

  let filtres = '';
  for (const cat of args.categories) {
    const estActif = cat.id === active;
    const href = cat.id === 'tous' ? '#/collection' : '#/collection/' + encodeURIComponent(cat.id);
    filtres += '<li><a class="filtre' + (estActif ? ' actif' : '') + '" href="' + escapeHtml(href) + '"' +
      (estActif ? ' aria-current="page"' : '') + '>' + escapeHtml(cat.label) + '</a></li>';
  }

  const main =
    '<section class="page-hero" aria-label="' + escapeHtml(copy.heroLabel) + '">' +
    '<img src="src/images/banniere-collection.jpg" alt="' + escapeHtml(copy.heroImgAlt) + '" />' +
    '<div class="texte"><h1 class="serif">' + escapeHtml(copy.heroTitle) + '</h1><p>' + escapeHtml(copy.heroSub) + '</p></div>' +
    '</section>' +
    '<div class="wrap">' +
    '<nav class="miettes" aria-label="' + escapeHtml(copy.crumbLabel) + '"><a href="#/">' + escapeHtml(copy.crumbHome) + '</a><span class="sep" aria-hidden="true">›</span><span>' + escapeHtml(copy.crumbCurrent) + '</span></nav>' +
    '<ul class="filtres" id="collection-filters">' + filtres + '</ul>' +
    renderProductGrid(list) +
    '</div>';

  return renderLayout({ activeId: 'collection', mainHtml: main, site: args.site, nav: args.nav, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.chrome });
}

/**
 * @param {object} args
 * @returns {string}
 */
export function renderProductPage(args) {
  const product = args.products.find(function (x) { return x.slug === args.slug; });
  if (!product) return renderNotFoundPage(args);
  const copy = args.copy;
  const autres = args.products.filter(function (x) { return x.slug !== args.slug; }).slice(0, 4);
  const vinted = safeUrl(args.site.vintedProfileUrl);

  let vintedBloc = '';
  if (vinted !== '') {
    vintedBloc = '<p><a class="btn" href="' + escapeHtml(vinted) + '" target="_blank" rel="noopener">' + escapeHtml(copy.vintedCta) + '</a></p>';
  } else {
    vintedBloc = '<p><span class="btn" aria-disabled="true">' + escapeHtml(copy.vintedPending) + '</span></p>';
  }

  let perks = '';
  for (const perk of copy.perks) {
    perks += '<li>' + escapeHtml(perk.icon) + '<br/>' + escapeHtml(perk.text) + '</li>';
  }

  const main =
    '<div class="wrap">' +
    '<nav class="note" aria-label="' + escapeHtml(copy.crumbLabel) + '"><a href="#/">' + escapeHtml(copy.crumbHome) + '</a> › <a href="#/collection">' + escapeHtml(copy.crumbCollection) + '</a> › ' + escapeHtml(product.name) + '</nav>' +
    '<article class="detail">' +
    '<figure><img src="' + escapeHtml(safeUrl(product.image)) + '" alt="' + escapeHtml(product.name) + '" /></figure>' +
    '<div><h1>' + escapeHtml(product.name) + '</h1>' +
    '<p class="prix prix--grand">' + escapeHtml(formatPrice(product.price)) + '</p>' +
    '<p class="desc">' + escapeHtml(product.desc) + '</p>' +
    '<p class="note">' + escapeHtml(copy.categoryPrefix) + ' ' + escapeHtml(product.catLabel) + '. ' + escapeHtml(copy.material) + '</p>' +
    vintedBloc +
    '<ul class="mini-reassurance">' + perks + '</ul>' +
    '</div></article>' +
    '<section aria-label="' + escapeHtml(copy.relatedLabel) + '"><h2>' + escapeHtml(copy.relatedTitle) + '</h2>' +
    renderProductGrid(autres) + '</section></div>';

  return renderLayout({ activeId: 'collection', mainHtml: main, site: args.site, nav: args.nav, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.chrome });
}

/**
 * @param {object} args
 * @returns {string}
 */
export function renderAproposPage(args) {
  const copy = args.copy;
  let piliers = '';
  for (const pilier of copy.pillars) {
    piliers += '<li><span class="ico" aria-hidden="true">' + escapeHtml(pilier.icon) + '</span><div><b>' + escapeHtml(pilier.title) + '</b></div><span class="note">' + escapeHtml(pilier.note) + '</span></li>';
  }
  let paragraphes = '';
  for (const p of copy.paragraphs) paragraphes += '<p>' + escapeHtml(p) + '</p>';

  const main =
    '<section class="page-hero" aria-label="' + escapeHtml(copy.heroLabel) + '">' +
    '<img class="img--position-basse" src="src/images/banniere-a-propos.jpg" alt="' + escapeHtml(copy.heroImgAlt) + '" />' +
    '<div class="texte"><h1 class="serif">' + escapeHtml(copy.heroTitle) + '</h1><p>' + escapeHtml(copy.heroSub) + '</p></div>' +
    '</section>' +
    '<div class="wrap">' +
    '<nav class="note" aria-label="Fil d\u2019Ariane"><a href="#/">' + escapeHtml(copy.crumbHome) + '</a> › ' + escapeHtml(copy.crumbCurrent) + '</nav>' +
    '<article class="detail detail--espacement"><figure><img src="src/images/hero-banner.jpg" alt="' + escapeHtml(copy.portraitAlt) + '" loading="lazy" /></figure>' +
    '<div><h2>' + escapeHtml(copy.title) + '</h2>' + paragraphes +
    '<p class="serif signature--grande">' + escapeHtml(copy.signature) + '</p>' +
    '<p class="note">' + escapeHtml(copy.portraitNote) + '</p></div></article>' +
    '<ul class="piliers">' + piliers + '</ul></div>';

  return renderLayout({ activeId: 'apropos', mainHtml: main, site: args.site, nav: args.nav, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.chrome });
}

/**
 * @param {object} args
 * @returns {string}
 */
export function renderStylePage(args) {
  const copy = args.copy;
  let mosaique = '';
  for (const img of copy.mosaic) {
    mosaique += '<img src="' + escapeHtml(safeUrl(img.src)) + '" alt="' + escapeHtml(img.alt) + '" loading="lazy" />';
  }
  mosaique += '<p class="carte-mot">' + copy.wordCard.map(escapeHtml).join('<br/>') + '</p>';
  let valeurs = '';
  for (const v of copy.values) {
    valeurs += '<li><span class="ico" aria-hidden="true">' + escapeHtml(v.icon) + '</span><div>' + escapeHtml(v.label) + '</div></li>';
  }

  const main =
    '<div class="wrap">' +
    '<nav class="note" aria-label="Fil d\u2019Ariane"><a href="#/">' + escapeHtml(copy.crumbHome) + '</a> › ' + escapeHtml(copy.crumbCurrent) + '</nav>' +
    '<h1 class="serif titre--page">' + escapeHtml(copy.title) + '</h1>' +
    '<p class="texte--centre texte--italique">' + escapeHtml(copy.subtitleA) + '<br/>' + escapeHtml(copy.subtitleB) + '</p>' +
    '<div class="mosaique">' + mosaique + '</div>' +
    '<ul class="valeurs">' + valeurs + '</ul></div>';

  return renderLayout({ activeId: '', mainHtml: main, site: args.site, nav: args.nav, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.chrome });
}

/**
 * Page juridique : hero + badges, encadré « L'essentiel », sommaire à ancres,
 * articles numérotés (sous-sections, tableaux, étapes), pied de version.
 * @param {object} args
 * @param {{ title:string, notice:string, chapeau:string, essentiel:Array<string>, articles:Array }} args.page
 * @returns {string}
 */
export function renderLegalPage(args) {
  const page = args.page;

  let mots = page.chapeau.split(/\s+/).length;
  for (const e of page.essentiel) mots += e.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
  for (const a of page.articles) {
    mots += a.heading.split(/\s+/).length;
    for (const p of a.paragraphs || []) mots += p.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
    for (const s of a.sub || []) mots += s.text.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
  }
  const lecture = Math.max(1, Math.round(mots / 200));

  let essentiel = '';
  for (const item of page.essentiel) essentiel += '<li>' + item + '</li>';

  let sommaire = '';
  for (const a of page.articles) {
    sommaire += '<li><button type="button" data-scroll="art-' + escapeHtml(a.num) + '"><span class="num">' + escapeHtml(a.num) + '</span>' + escapeHtml(a.heading) + '</button></li>';
  }

  let articles = '';
  for (const a of page.articles) {
    let corps = '';
    for (const p of a.paragraphs || []) corps += '<p>' + p + '</p>';
    for (const s of a.sub || []) {
      corps += '<p class="jsub"><span class="jsubnum">' + escapeHtml(s.subnum) + '</span>' + s.text + '</p>';
    }
    if (a.table) {
      let tete = '';
      for (const h of a.table.head) tete += '<th scope="col">' + escapeHtml(h) + '</th>';
      let lignes = '';
      for (const r of a.table.rows) {
        let cellules = '';
        for (const c of r) cellules += '<td>' + c + '</td>';
        lignes += '<tr>' + cellules + '</tr>';
      }
      corps += '<div class="jtable"><table><thead><tr>' + tete + '</tr></thead><tbody>' + lignes + '</tbody></table></div>';
    }
    if (a.steps) {
      let etapes = '';
      for (const e of a.steps) etapes += '<li>' + e + '</li>';
      corps += '<ol class="jsteps">' + etapes + '</ol>';
    }
    for (const p of a.paragraphsAfter || []) corps += '<p>' + p + '</p>';
    articles += '<section class="jarticle" id="art-' + escapeHtml(a.num) + '" tabindex="-1" aria-labelledby="t-art-' + escapeHtml(a.num) + '">' +
      '<h2 id="t-art-' + escapeHtml(a.num) + '"><span class="jnum">' + escapeHtml(a.num) + '</span>' + escapeHtml(a.heading) + '</h2>' + corps + '</section>';
  }

  const main =
    '<div class="wrap jpage">' +
    '<nav class="note" aria-label="Fil d\u2019Ariane"><a href="#/">Accueil</a> › ' + escapeHtml(page.title) + '</nav>' +
    '<header class="jhero">' +
    '<p class="jbadges"><span class="badge">Version v0.1</span><span class="badge">20/10/2026</span><span class="badge">Lecture ~' + lecture + ' min</span></p>' +
    '<h1>' + escapeHtml(page.title) + '</h1>' +
    '<p class="jchapeau">' + escapeHtml(page.chapeau) + '</p>' +
    '<p class="note">' + escapeHtml(page.notice) + '</p>' +
    '</header>' +
    '<aside class="jessentiel" aria-label="L\u2019essentiel"><h2>L\u2019essentiel</h2><ul>' + essentiel + '</ul></aside>' +
    '<div class="jlayout">' +
    '<nav class="jsommaire" aria-label="Sommaire"><h2>Sommaire</h2><ol>' + sommaire + '</ol></nav>' +
    '<div class="jarticles">' + articles + '</div>' +
    '</div>' +
    '<footer class="jfooter"><p class="note">' + escapeHtml(page.title) + ' — version v0.1 du 20/10/2026. Document de travail : historique des versions tenu après publication.</p></footer>' +
    '</div>';
  return renderLayout({ activeId: '', mainHtml: main, site: args.site, nav: args.nav, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.chrome });
}

/**
 * @param {object} args
 * @returns {string}
 */
export function renderNotFoundPage(args) {
  const copy = args.notFoundCopy;
  const main =
    '<div class="wrap"><section class="perdue" aria-label="' + escapeHtml(copy.sectionLabel) + '">' +
    '<p class="coeur" aria-hidden="true">♡</p>' +
    '<h1 class="serif">' + escapeHtml(copy.title) + '</h1>' +
    '<p>' + escapeHtml(copy.text) + '</p>' +
    '<p><a class="btn" href="#/">' + escapeHtml(copy.homeCta) + '</a> <a class="btn second" href="#/collection">' + escapeHtml(copy.collectionCta) + '</a></p>' +
    '</section></div>';
  return renderLayout({ activeId: '', mainHtml: main, site: args.site, nav: args.nav, navSecondary: args.navSecondary, legalLinks: args.legalLinks, copy: args.chrome });
}

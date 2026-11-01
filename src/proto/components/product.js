/**
 * Cartes et grilles produits (présentation pure, données échappées).
 * @module components/product
 */
import { escapeHtml, formatPrice, safeUrl, sizeAttrs } from '../lib/format.js';
import { imageDims } from '../catalogue.js';

/**
 * @param {{ name:string, slug:string, price:number, image:string }} product
 * @returns {string} <li>…</li>
 */
export function renderProductCard(product) {
  const href = '#/collection/' + encodeURIComponent(product.slug);
  const label = product.name + ' — ' + formatPrice(product.price);
  return (
    '<li><article class="card">' +
    '<a href="' + escapeHtml(href) + '" aria-label="' + escapeHtml(label) + '">' +
    '<figure><img src="' + escapeHtml(safeUrl(product.image)) + '"' + sizeAttrs(imageDims(product)) + ' alt="' + escapeHtml(product.name) + '" loading="lazy" />' +
    '<figcaption><span>' + escapeHtml(product.name) + '</span><span class="prix">' + escapeHtml(formatPrice(product.price)) + '</span></figcaption></figure>' +
    '</a></article></li>'
  );
}

/**
 * @param {Array} products
 * @returns {string}
 */
export function renderProductGrid(products) {
  let items = '';
  for (const p of products) items += renderProductCard(p);
  return '<ul class="grid">' + items + '</ul>';
}

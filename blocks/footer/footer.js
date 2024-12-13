import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  footer.classList.add("footer", "block");
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const footerSections = footer.querySelectorAll(".section");

  const logoImgUrl = footerSections[0].querySelector("img").src;
  const footerMenuList = footerSections[0].querySelector("ul");
  const footerMenu = document.createElement("div");
  footerMenu.classList.add("footer-menu-section");
  footerMenu.innerHTML = `
    <img class="wknd-logo-img" src="${logoImgUrl}" />
  `;
  footerMenuList.classList.add("footer-menu");
  const currentLink = window.location.href;
  footerMenuList.querySelectorAll("li").forEach((item) => {
    if (currentLink.includes(item.querySelector("a").href)) {
      item.classList.add("active");
    }
  })
  footerMenu.appendChild(footerMenuList);
  footerSections[0].replaceWith(footerMenu)
  

  const copyRightSection = document.createElement("div");
  copyRightSection.classList.add("section", "copy-right");
  copyRightSection.innerHTML = footerSections[1].querySelector(".default-content-wrapper").innerHTML;
  footerSections[1].replaceWith(copyRightSection);
  copyRightSection.querySelectorAll("a").forEach((a) => a.target = "_blank");
  block.replaceWith(footer);
}

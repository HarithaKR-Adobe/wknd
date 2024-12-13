import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';


function toggleSidebar(evt) {
  const body = document.body;
  const isOpen = body.classList.contains("show-nav");
  if (isOpen) {
    body.classList.remove("show-nav");
  } else {
    body.classList.add("show-nav")
  }
}

function addHeaderSidebarWrapper(header) {
  const navSidebar = document.createElement("div");
  navSidebar.classList.add("nav-sidebar-wrapper");
  navSidebar.innerHTML = `<div class="nav-sidebar"></div>`;
  document.body.appendChild(navSidebar);
}

function renderLogo(logoSection) {
  const logo = document.createElement("a");
  logo.classList.add("header-logo");
  const imgUrl = logoSection.querySelector("img").src;
  const linkUrl = logoSection.querySelector("a").href;
  logo.innerHTML = `<img class="wknd-logo-img" src="${imgUrl}" />`;
  logo.href = linkUrl;
  logoSection.replaceWith(logo);
}

function renderMenuItems(menuSection) {
  const menus = menuSection.querySelector("ul");
  menus.classList.add("header-menu");
  menus.querySelectorAll("li").forEach((li) => {
    li.classList.add("menu-item");
    const currentLink = li.querySelector("a").href;
    if (currentLink === window.location.href.split("?")[0]) {
      li.classList.add("active");
    }
  });
  menuSection.replaceWith(menus);

  const sidebarMenus = menus.cloneNode(true);
  sidebarMenus.classList.remove("header-menu");
  sidebarMenus.classList.add("nav-sidebar-menu");

  const navSidebar = document.querySelector(".nav-sidebar");
  navSidebar.appendChild(sidebarMenus);
}

function updateHeaderContents(header) {
  const sections = header.querySelectorAll(".section");
  renderLogo(sections[0]);
  renderMenuItems(sections[1]);
}

export default async function decorate(block) {
  // load footer as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate footer DOM
  block.textContent = '';
  const header = document.createElement('div');
  header.classList.add("header", "block");

  const navHamburger = document.createElement("button");
  navHamburger.type = "button";
  navHamburger.classList.add("nav-hamburger-button");
  navHamburger.innerHTML = `<span class="nav-hamburger-icon"></span>`;
  navHamburger.addEventListener("click", toggleSidebar);

  header.appendChild(navHamburger);

  while (fragment.firstElementChild) {
    header.append(fragment.firstElementChild);
  }

  addHeaderSidebarWrapper(header);
  updateHeaderContents(header);

  block.replaceWith(header);
}

'use strict'

const navToggle = document.querySelectorAll('[data-nav-toggle]')
const menuItems = document.querySelectorAll('.navbar-link')
const navBar = document.querySelector('nav')

function toggleMenu (togglers, item) {
  togglers.forEach(toggle => {
    toggle.addEventListener('click', () => {
      item.classList.toggle('active')
    })
  })
}

toggleMenu(navToggle, navBar)
toggleMenu(menuItems, navBar)
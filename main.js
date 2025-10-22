'use strict';

console.log('hello');

/**
 * Elements
 */

const menu = document.querySelector('.menu');
const menuList = document.querySelector('nav');

menu.addEventListener('click', () => menuList.classList.toggle('show'));

/**
 * manipula cliques fora do menu para fechar
 */
window.addEventListener('click', (e) => {
  console.log();
  if (!e.target.closest('.menu')) {
    menuList.classList.remove('show');
  }
});

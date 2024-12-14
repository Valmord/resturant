const content = document.querySelector('#content');

function createMenuContent(){
  const menuElement = document.createElement('div');
  menuElement.classList.add('menu-page');

  const h1Element = document.createElement('h1');
  h1Element.textContent = 'Menu:';

  menuElement.appendChild(h1Element);
  content.appendChild(menuElement);
}

export { createMenuContent }
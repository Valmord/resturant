const content = document.querySelector('#content');

function createHomeContent(){
  const homeElement = document.createElement('div');
  homeElement.classList.add('home-page');

  const h1Element = document.createElement('h1');
  h1Element.textContent = 'Welcome to the...';

  homeElement.appendChild(h1Element);
  content.appendChild(homeElement);
}

export { createHomeContent }
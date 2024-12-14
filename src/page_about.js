const content = document.querySelector('#content');

function createAboutContent(){
  const aboutElement = document.createElement('div');
  aboutElement.classList.add('about-page');

  const h1Element = document.createElement('h1');
  h1Element.textContent = 'About Us';

  aboutElement.appendChild(h1Element);
  content.appendChild(aboutElement);
}

export { createAboutContent }
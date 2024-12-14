import { chumBucketMenu } from "./data";

const content = document.querySelector('#content');

function createMenuElements(){
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-items');

  for (let key in chumBucketMenu){
    const sectionElement = document.createElement('h3');
    sectionElement.textContent = key[0].toUpperCase() + key.slice(1);
    const listContainer = document.createElement('ul');
    chumBucketMenu[key].forEach( item => {
      const listElement = document.createElement('li');
      const foodName = document.createElement('h4');
      const foodDesc = document.createElement('p');
      const foodPrice = document.createElement('p');
      const emTag = document.createElement('em');
      foodName.textContent = item.name;
      foodDesc.textContent = item.description;
      emTag.textContent = `$${item.price.toFixed(2)}`;

      listElement.appendChild(foodName);
      listElement.appendChild(foodDesc);
      foodPrice.appendChild(emTag);
      listElement.appendChild(foodPrice);
      listContainer.appendChild(listElement);
    })
    sectionElement.appendChild(listContainer);
    sectionElement.appendChild(document.createElement('hr'));
    menuContainer.appendChild(sectionElement);
  }
  return menuContainer;
}

function createMenuContent(){
  const menuBody = document.createElement('div');
  menuBody.classList.add('menu-page');

  const menuHeaders = document.createElement('div');
  const h1Element = document.createElement('h1');
  const h2Element = document.createElement('h2');
  h1Element.textContent = 'Chum Bucket Menu';
  h2Element.textContent = 'Home of the Sea’s Finest & Most Unappealing Delicacies';

  menuHeaders.appendChild(h1Element);
  menuHeaders.appendChild(h2Element);
  menuBody.appendChild(menuHeaders);

  const menuContainer = createMenuElements();
  menuBody.appendChild(menuContainer);
  

  content.appendChild(menuBody);
}

export { createMenuContent }
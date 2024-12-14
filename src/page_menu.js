const content = document.querySelector('#content');
import menuImg from './images/menu.jpg';

// Section / Title as H3 header
// Container for each item as li
// Name of food = h4
// description as p
// price as p but 'strong'

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

const chumBucketMenu = {
  appetizers: [
    {
      name: "Chum Bites",
      description: "Small, chewy morsels made from the finest mystery meat—tender, chewy, and oddly satisfying. Paired with a side of bland dipping sauce.",
      price: 2.99
    },
    {
      name: "Mushy Sea Slaw",
      description: "A heaping portion of soggy seaweed slaw, tossed in our signature Chum-ade dressing. Freshness optional!",
      price: 3.99
    },
    {
      name: "Bucket O' Worms",
      description: "Creepy-crawly sea worms, straight from the deep! Served warm with a side of 'Chum Sauce' for an unforgettable bite.",
      price: 4.50
    }
  ],
  
  "Main Dishes": [
    {
      name: "Chum Bucket Surprise",
      description: "A daily special that changes depending on what’s left in the back of the bucket. You’ll never know what you’re getting… but that’s the fun of it! Guaranteed to surprise.",
      price: 5.99
    },
    {
      name: "Grilled Chumwich",
      description: "Chum patty, char-grilled to perfection and stuffed between two stale, soggy buns. Served with a side of limp fries.",
      price: 6.50
    },
    {
      name: "Chum Chowder",
      description: "A lukewarm bowl of mystery soup, with a dash of something unidentifiable. Served with a crusty, uninviting breadroll.",
      price: 4.99
    },
    {
      name: "Chum Platter",
      description: "A little bit of everything from our churning vat of mystery. Who needs choice when you have the full Chum Bucket experience?",
      price: 7.99
    }
  ],

  sides: [
    {
      name: "Gooey Fries",
      description: "Fries so soggy, they almost become a soup! Dipped in our special mystery seasoning for that unmistakable Chum Bucket taste.",
      price: 2.50
    },
    {
      name: "Seaweed Chips",
      description: "Crispy, salty, and utterly forgettable. The perfect accompaniment to any chummy meal.",
      price: 2.99
    }
  ],

  drinks: [
    {
      name: "Chum-ade",
      description: "A tangy, tart beverage made from an undisclosed blend of fruits and sea chemicals. Drink at your own risk.",
      price: 1.99
    },
    {
      name: "Saltwater Squeeze",
      description: "A refreshing, overly salty drink—just like the ocean! Served chilled, with a hint of... mystery.",
      price: 2.50
    }
  ],

  desserts: [
    {
      name: "Melted Chum Cake",
      description: "A gooey, semi-frozen dessert that's strangely irresistible. Or maybe that’s just the mystery ingredient at work?",
      price: 3.99
    },
    {
      name: "Soggy Sponge Squares",
      description: "A soft, mushy sponge cake that's completely lacking in flavor. It might even remind you of someone you know...",
      price: 2.50
    }
  ],

  specials: [
    {
      name: "Plankton's 'Taco' Surprise",
      description: "A limited-time special: a taco made from Chum meat, seaweed, and some other ingredients we probably shouldn't talk about. You won’t forget it!",
      price: 5.99
    },
    {
      name: "Fried Mystery Meat Nuggets",
      description: "Only for the bold! Chunks of our secret meat, battered and fried to a crisp (or something resembling a crisp).",
      price: 4.99
    }
  ]
};


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

  // const imgElement = new Image();  //document.querySelector('img');
  // imgElement.src = menuImg;
  // imgElement.classList.add('menu-img');
  // menuBody.appendChild(imgElement);
  

  content.appendChild(menuBody);
}

export { createMenuContent }
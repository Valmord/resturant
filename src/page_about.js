import { chumBucketAbout } from "./data";

const content = document.querySelector('#content');

function createAboutElements(){
  const aboutElementsContainer = document.createElement('div');
  aboutElementsContainer.classList.add('about-items');

  for (let section in chumBucketAbout) {
    const item = chumBucketAbout[section];
    const sectionElement = document.createElement('div');
    sectionElement.classList.add('section');
    const rule = document.createElement('hr');
    if (section !== 'reasonsToVisit') {
        const title = document.createElement('h3');
        const desc = document.createElement('p');
        title.textContent = item.title;
        desc.textContent = item.content;
        sectionElement.appendChild(title);
        sectionElement.appendChild(desc);
        console.dir(title);
      
    } else {
      const title = document.createElement('h3');
      title.textContent = item.title;

      const pointsContainer = document.createElement('ul');
      item.bulletPoints.forEach( point => {
        const listElement = document.createElement('li');
        const pointTitle = document.createElement('strong');
        const pointContent = document.createElement('span');
        pointTitle.textContent = point.title + ': ';
        pointContent.textContent = point.description;
        listElement.appendChild(pointTitle);
        listElement.appendChild(pointContent);
        pointsContainer.appendChild(listElement);
        sectionElement.appendChild(title);
        sectionElement.appendChild(pointsContainer);
      })
    }
    aboutElementsContainer.appendChild(sectionElement);
    aboutElementsContainer.appendChild(rule);
  }
  return aboutElementsContainer;
}

function createAboutHeader(){
  const aboutHeaderContainer = document.createElement('div');
  aboutHeaderContainer.classList.add('about-header');
  const h1Element = document.createElement('h1');
  h1Element.textContent = "About The Chum Bucket";
  const h2Element = document.createElement('h2');
  h2Element.textContent = "Where ordinary dining goes to retire.";
  const headerContent = document.createElement('p');
  headerContent.textContent = "Welcome to The Chum Bucket, the 'restaurant' that dares to be different! Located at the heart of Bikini Bottom, we offer a one-of-a-kind dining experience unlike any other. Whether you're craving a bite of something unique, or you're just looking to embrace the weird side of life, you've come to the right place.";

  aboutHeaderContainer.appendChild(h1Element);
  aboutHeaderContainer.appendChild(h2Element);
  aboutHeaderContainer.appendChild(headerContent);
  return aboutHeaderContainer;
}

function createAboutContent(){
  const aboutElement = document.createElement('div');
  aboutElement.classList.add('about-page');

  aboutElement.appendChild(createAboutHeader());
  aboutElement.appendChild(createAboutElements());

  content.appendChild(aboutElement);
}

export { createAboutContent }
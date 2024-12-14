import { createHomeContent } from "./page_home";
import { createMenuContent } from "./page_menu";
import { createAboutContent } from "./page_about";
import { createReviewContent } from "./page_reviews";


const content = document.querySelector('#content');

const clearContent = () => content.textContent = '';


export const renderNewPage = function(btnID){
  clearContent();
  switch (btnID) {
    case 'home':
      createHomeContent();
      break;
    case 'menu':
      createMenuContent();
      break;
    case 'about':
      createAboutContent();
      break;
    case 'reviews':
      createReviewContent();
      break;
    default:
      throw Error('Fatal error occured');
  }
}
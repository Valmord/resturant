import { chumBucketReviews } from './data';

const content = document.querySelector('#content');

const star = '⭐️';
const emptyStar = '☆'; 


function createReviewerImgElement(imgURL){
  const image = new Image();
  image.src = imgURL;
  return image;
}

function createReviewElements(){
  const reviewsContainer = document.createElement('div');
  reviewsContainer.classList.add('review-items');

  chumBucketReviews.forEach( review => {
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-item');

    const reviewTop = document.createElement('div');
    const reviewBtm = document.createElement('div');
    const reviewImg = document.createElement('div');
    const name = document.createElement('h3');
    const rating = document.createElement('p');
    const reviewContent = document.createElement('div');
    const titleText = document.createElement('strong');
    const reviewParagraph = document.createElement('p');

    reviewTop.classList.add('review-header');
    reviewBtm.classList.add('review-content');

    reviewImg.appendChild(createReviewerImgElement(review.imgURL));
  

    name.textContent = review.name;
    rating.textContent = `${star.repeat(review.rating)}${emptyStar.repeat(5-review.rating)}`;
    titleText.textContent = review.title;
    reviewParagraph.textContent = review.review;
    reviewTop.appendChild(name);
    reviewTop.appendChild(rating);

    reviewContent.appendChild(titleText);
    reviewContent.appendChild(reviewParagraph);
  
    reviewBtm.appendChild(reviewImg);
    reviewBtm.appendChild(reviewContent);
    reviewContainer.appendChild(reviewTop);
    reviewContainer.appendChild(reviewBtm);
    reviewsContainer.appendChild(reviewContainer);
  })
  
  return reviewsContainer;
}

function createReviewContent(){
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review-page');

  reviewElement.appendChild(createReviewElements());
  content.appendChild(reviewElement);

  // const h1Element = document.createElement('h1');
  // h1Element.textContent = 'Welcome to the...';

  // homeElement.appendChild(h1Element);
  // content.appendChild(homeElement);
}

export { createReviewContent }





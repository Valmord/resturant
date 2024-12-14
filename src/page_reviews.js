const content = document.querySelector('#content');

const star = '⭐️';
const emptyStar = '☆';


const chumBucketReviews = [
  {
    name: "Sandy Cheeks",
    rating: 4,
    title: "A Texas-sized experiment in flavor!",
    review: "Well, as a Texan, I’ve seen some interesting dishes in my time, but The Chum Bucket takes the cake... or should I say, takes the chum? I came here expecting a meal I’d never forget, and I was right! The Chum Bites were, uh, unusual, but I’ll admit, they had a certain charm to them. The Chum-ade? A little too tangy for my liking, but it kept me on my toes. I’m not sure what’s in that soup, but I swear there’s some science behind it. Definitely a place for the curious, if you can stomach it!"
  },
  {
    name: "Patrick Star",
    rating: 5,
    title: "Best. Chum. Ever.",
    review: "I love this place! I don’t know what they put in the Grilled Chumwich, but it’s like every bite feels like I’m hugging a rock under the sea. I’ve eaten here like, a million times! The Mushy Sea Slaw is super mushy, which I love because it’s like eating a cloud made of slaw. The only downside is I keep falling asleep at the table after, but maybe that’s just me. Anyway, go eat here if you like food... or if you’re like me and you like things that are squishy and weird."
  },
  {
    name: "Squidward Tentacles",
    rating: 2,
    title: "I wouldn't recommend it, but it does have... something.",
    review: "I honestly don’t know why I keep going back. Maybe I enjoy suffering. Maybe I’m a masochist. Or maybe I just love the Chum Chowder’s mystery—I really can’t say. The atmosphere is, as you would expect, dreadful, and the food is even worse. But there’s something... oddly intriguing about the whole place. The Seaweed Chips taste like wet leaves, but it’s the type of wet leaves I can’t stop eating. Wouldn’t bring my worst enemy here, but... I’ll be back for more Fried Mystery Meat Nuggets. They’re weirdly addictive."
  },
  {
    name: "Mr. Krabs",
    rating: 2,
    title: "If you’re lookin’ for a deal, you might find one, but not in the food.",
    review: "Look, I came to The Chum Bucket to check out their prices, and they’re cheap, alright? Real cheap. But, as usual, you get what you pay for. The Chum Platter was a complete mystery. I can’t tell you what was in it, but I do know I felt my wallet *heavier* after I left—so that’s something, right? If you’re in the mood for a *pricey* stomach ache, then I guess it’s worth a try. Otherwise, stick to the Krusty Krab, where we actually care about our customers!"
  },
  {
    name: "Gary the Snail",
    rating: 5,
    title: "Meow meow meow, meow.",
    review: "A very interesting place. The food is... unusual, but I kept going back for more. The flavors are as mysterious as the ocean depths, and my curiosity has certainly been satisfied. Highly recommend the Chum Bites. I don’t know what’s in them, but I don’t mind. A perfect meal for a discerning creature like myself."
  },
  {
    name: "Plankton",
    rating: 5,
    title: "I don’t know what’s wrong with the others, but this place is perfect!",
    review: "Okay, maybe I’m biased, but The Chum Bucket is a masterpiece. Sure, it’s not for the faint of heart, but if you’re looking for something that’ll really challenge your taste buds—and your sense of adventure—this is the spot. The Chum Bucket Surprise is an experience you’ll never forget... even if you want to. I know the locals complain about the *questionable* flavors, but you can’t make an omelet without cracking a few eggs! And who needs eggs when you have *plankton-based* dishes that make your stomach do backflips? It’s the future of dining!"
  },
  {
    name: "Larry the Lobster",
    rating: 4,
    title: "Not bad... for a workout.",
    review: "I came here after my morning workout, looking for some fuel. Let me tell you, Gooey Fries? Absolutely did not fuel my muscles, but they were kinda fun to chew through. Not gonna lie, the food's a little too weird for my usual post-gym routine, but hey, it was *something*. I got a good laugh, though, and if you’re up for a challenge, the Fried Mystery Meat Nuggets will give you the most bizarre workout your taste buds have ever had. If you’re a thrill-seeker, go for it, but maybe hit the gym afterwards."
  },
  {
    name: "Old Man Walker",
    rating: 2,
    title: "I remember when food tasted like food...",
    review: "You kids don’t know what food is anymore. Back in my day, we didn’t need to eat things that were 'innovative' or 'mysterious.' We had good ol' fish and chips, not this... this *slop* they serve at The Chum Bucket. I tried the Chum Chowder, and I think it’s the reason my arthritis flared up. And don’t get me started on the Soggy Sponge Squares. Whatever happened to *real* food, I ask you? I guess if you like strange food that defies logic, this place might work for you. I’ll stick to my canned tuna, thank you very much!"
  }
];

function createReviewElements(){
  const reviewsContainer = document.createElement('div');
  reviewsContainer.classList.add('review-items');

  chumBucketReviews.forEach( review => {
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-item');
    const name = document.createElement('h3');
    name.textContent = review.name;
    const rating = document.createElement('p');
    rating.textContent = `${star.repeat(review.rating)}${emptyStar.repeat(5-review.rating)}`;
    const title = document.createElement('p');
    const titleText = document.createElement('strong');
    titleText.textContent = review.title;
    const reviewParagraph = document.createElement('p');
    reviewParagraph.textContent = review.review;
    reviewContainer.appendChild(name);
    reviewContainer.appendChild(rating);

    title.appendChild(titleText);
    reviewContainer.appendChild(title);
    reviewContainer.appendChild(reviewParagraph);
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





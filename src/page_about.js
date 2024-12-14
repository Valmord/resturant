const content = document.querySelector('#content');

// name: "The Chum Bucket",
// tagline: "Where ordinary dining goes to retire.",
// description: "Welcome to The Chum Bucket, the 'restaurant' that dares to be different! Located at the heart of Bikini Bottom, we offer a one-of-a-kind dining experience unlike any other. Whether you're craving a bite of something unique, or you're just looking to embrace the weird side of life, you've come to the right place.",


const chumBucketAbout = {
  story: {
    title: "Our Story",
    content: "Founded by the ever-determined, albeit slightly misunderstood, Plankton, The Chum Bucket is the result of years of culinary experimentation, bold ideas, and an unwavering commitment to the 'unusual.' Born out of a desire to rival the more popular eateries of Bikini Bottom, particularly the Krusty Krab, we specialize in serving mystery meats, unconventional flavors, and unforgettable (sometimes questionable) dishes. While our menu might not be for everyone, those with an adventurous spirit know there’s always something new and exciting waiting for them at The Chum Bucket. From the infamous Chum Bites to our signature Chum-ade, we promise an experience that will leave a lasting impression—whether it’s good or bad!"
  },
  
  philosophy: {
    title: "Our Philosophy",
    content: "At The Chum Bucket, we don’t believe in 'freshness' or 'taste' the way other restaurants do. Instead, we focus on something much more important: innovation. Every item on our menu is crafted with a touch of mystery, a sprinkle of sea creatures, and a whole lot of heart (or maybe just a lot of Chum). We pride ourselves on pushing the boundaries of what food can be. Why serve the same old boring meals when you can have something that really challenges your taste buds? That’s why our creations are truly one-of-a-kind—because when you dine with us, you’re in for an experience unlike any other."
  },

  reasonsToVisit: {
    title: "Why Choose Us?",
    bulletPoints: [
      {
        title: "Unpredictable Flavor",
        description: "Whether you’re a brave adventurer or a fan of the unexpected, our menu offers a flavor adventure in every bite. Expect the unexpected!"
      },
      {
        title: "Specialty Chum",
        description: "At The Chum Bucket, chum isn't just a name—it's a way of life. We’ve perfected the art of transforming mystery ingredients into something you’ll remember forever. (Maybe not for all the right reasons, but who’s counting?)"
      },
      {
        title: "Plankton’s Vision",
        description: "Every dish is inspired by the man himself—Plankton. His genius ideas, however... questionable, come to life in every item we serve. You’ll get a taste of Bikini Bottom’s most eccentric mastermind with every order."
      },
      {
        title: "A Fun (if slightly bizarre) Ambiance",
        description: "Our décor may not win any design awards, but we guarantee a quirky, offbeat atmosphere where you can enjoy our 'delicious' offerings in a completely unique setting. You won’t find anything like it anywhere else."
      }
    ]
  },

  promise: {
    title: "Our Promise",
    content: "Whether you're visiting for the first time or you're one of our loyal, brave customers, The Chum Bucket promises an experience that’s... well, different. So, come on down, and let us surprise you with flavors that are just a little bit too mysterious to understand—and a whole lot of fun to taste. But remember, eating at The Chum Bucket isn't just about food. It's about embracing the unusual and living on the edge of the culinary world."
  },

  closing: "The Chum Bucket—Where ordinary dining goes to retire."
};

function createAboutElements(){
  const aboutElementsContainer = document.createElement('div');
  aboutElementsContainer.classList.add('about-items');

  for (let section in chumBucketAbout) {
    const item = chumBucketAbout[section];
    const sectionElement = document.createElement('div');
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
        pointTitle.textContent = point.title + ':';
        listElement.textContent = point.description;
        listElement.appendChild(pointTitle);
        listElement.appendChild(pointContent);
        pointsContainer.appendChild(listElement);
        sectionElement.appendChild(title);
        sectionElement.appendChild(pointsContainer);
      })
    }
    aboutElementsContainer.appendChild(sectionElement);
  }
  return aboutElementsContainer;
}


function createAboutContent(){
  const aboutElement = document.createElement('div');
  aboutElement.classList.add('about-page');

  const h1Element = document.createElement('h1');
  h1Element.textContent = 'About Us';

  aboutElement.appendChild(h1Element);
  content.appendChild(aboutElement);
  aboutElement.appendChild(createAboutElements());
}

export { createAboutContent }
// Author and book details
const authorName = "Sybil Ann Young";
const authorDescription = "Welcome to the official page of Sybil Ann Young. Discover her latest books, and get your own copy today!";
const authorBio = "Sybil Young was born and raised in St. Louis, Missouri, she attended Soldan High School. Sybil, got married at an early age, and later gave birth to five beautiful children. It was during her childhood when she discovered and found comfort in her own writing. Her passion for writing continues, and includes skits, plays, songs, acting, dramatic poetry reading, and motivational speaking. Currently, Sybil Young is residing with her family in Atlanta, Georgia.";
const aboutAuthor = "About Sybil Ann Young"
const authorPhoto = "SybilYoung.png";
const facebookLink = "https://www.facebook.com/sybil.young.355";

// Books data
const books = [
    {
        title: "Ministering Through Cliché’s: Volume One",
        blurb: "This book is about Ministering Through Cliché’s. I had so much fun finding a message using clichés, inspired by God. I pray that God will visit you through this book, as it ministers to your Spirit and that you will enjoy reading it just as much as I enjoyed writing it.",
        coverImage: "ClichesOne.png",
        amazonLink: "https://a.co/d/iJfoYCm"
    },
    {
        title: "Ministering Through Clichés': Volume Two",
        blurb: "This Book is about Ministering Through Cliché's. I had so much fun finding a message using cliche's, inspired by God. I pray that God will visit you through this book, as it ministers to your spirit and that you will enjoy reading it just as much as I enjoyed writing it.",
        coverImage: "ClichesOne.png",
        amazonLink: "https://a.co/d/35Ob4n3"
    },
    {
        title: "Look Again",
        blurb: "Many times we go through life walking right by people, places, and things that can enhance our lives. Look Again is a book that will inspire you in every aspect of your life to look again and again if need be, so that you won't miss that which is most precious and valuable to you. Look Again, was birth out of some major turns and changes in my life; The bad ones I learned from, the good ones I grew from. Now, both will cause you to look again. It is at the appointed time you will make your decision on what you see, whatever the case may be; Don't hesitate to look again.",
        coverImage: "LookAgain.png",
        amazonLink: "https://a.co/d/6biEEoW"
    }
];

// Populate author details
document.getElementById("authorName").textContent = authorName;
document.getElementById("authorDescription").textContent = authorDescription;
document.getElementById("authorBio").textContent = authorBio;
document.getElementById("authorPhoto").src = authorPhoto;
document.getElementById("aboutAuthor").src = aboutAuthor;
document.getElementById("facebookLink").href = facebookLink;

// Generate book cards
const booksSection = document.getElementById("booksSection");
books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    
    const bookImg = document.createElement("img");
    bookImg.src = book.coverImage;
    bookImg.alt = `${book.title} Cover`;
    bookDiv.appendChild(bookImg);
    
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookDiv.appendChild(bookTitle);
    
    const bookBlurb = document.createElement("p");
    bookBlurb.className = "blurb";
    bookBlurb.textContent = book.blurb;
    bookDiv.appendChild(bookBlurb);
    
    const buyLink = document.createElement("a");
    buyLink.href = book.amazonLink;
    buyLink.className = "buy-link";
    buyLink.textContent = "Buy on Amazon";
    bookDiv.appendChild(buyLink);
    
    booksSection.appendChild(bookDiv);
});

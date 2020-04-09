const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//My code
//checked that my code worked
console.log(document);

//.....Tasks 1 & 2............
//Added header img to page
const headerImage = document.getElementById('cta-img');
headerImage.src = 'img/header-img.png';
//checked that my code worked
console.log(headerImage);

//Added middle img
const middleImage = document.querySelector('#middle-img');
middleImage.src = 'img/mid-page-accent.jpg';
//check that it works
console.log(middleImage);

//Updating text content in the navbar
const navLinks = document.querySelectorAll('header nav a');
navLinks[0].textContent = 'Services';
navLinks[1].textContent = 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';

//...........Dad's example.....................
const titles = ['one', 'two', 'three'];
titles.forEach((title, i) => {
  console.log(title + ' ' + i);
});
//..........End Dad's example..................

//Updating h1 text content
const mainHeader = document.querySelector('.cta-text h1');
mainHeader.innerHTML = 'DOM <br> IS <br> AWESOME';

//Updating header button text content
const headerButton = document.querySelector('.cta-text button');
headerButton.textContent = 'Get Started';

//Selecting all paragraph titles
const paraHeaders = document.querySelectorAll('.text-content h4');
//checking that it selected the correct elements
console.log(paraHeaders);
//Updating text content of paragraph titles
paraHeaders[0].textContent = 'Features';
paraHeaders[1].textContent = 'About';
paraHeaders[2].textContent = 'Services';
paraHeaders[3].textContent = 'Product';
paraHeaders[4].textContent = 'Vision';

//Selecting all main paragraphs
const mainParas = document.querySelectorAll('.text-content p');
//Checking that it selected the correct elements
console.log(mainParas);
//Updating the text content for the main paragraphs
mainParas[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainParas[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainParas[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainParas[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainParas[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//selecting contact title
const contactTitle = document.querySelector('.contact h4');
//Updating contact title text content
contactTitle.textContent = 'Contact';

//selecting contact paragraphs
const addressLines = document.querySelectorAll('.contact p');
//checking that the correct elements got selected
console.log(addressLines);
//updating text content of contact paragraphs
addressLines[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
addressLines[1].textContent = '1 (888) 888-8888';
addressLines[2].textContent = 'sales@greatidea.io';

//selecting footer paragraph
const footerPara = document.querySelector('footer p');
//updating text content of footer paragraph
footerPara.textContent = 'Copyright Great Idea! 2018';

//.....Task 3......Adding new content.....

//Changing navbar text color
navLinks.forEach((link) => {
  link.style.color = 'green';
});

//adding new navbar links
//1st new element
const firstNewLink = document.createElement('a');
firstNewLink.textContent = 'Reviews';
firstNewLink.style.color = 'green';
document.querySelector('header nav').appendChild(firstNewLink);

//2nd new element
const secondNewLink = document.createElement('a');
secondNewLink.textContent = 'Shop';
secondNewLink.style.color = 'green';
document.querySelector('header nav').prepend(secondNewLink);
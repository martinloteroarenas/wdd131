document.getElementById("lastModified").innerHTML = document.lastModified;
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//cosas nuevas

const templesContainer = document.getElementById('temples');

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bogota Colombia",
    location: "Bogotá Colombia",
    dedicated: "1999, April, 24-26",
    area: 53500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla Colombia",
    dedicated:"2018, december, 9",
    area: 25349,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
  },
  {
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba Bolivia",
    dedicated: "2000, April, 30",
    area: 35500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
  }
];

createTempleCard();

function createTempleCard(){

  //document.querySelector('.temples').innerHTML = "";

  
  document.addEventListener('DOMContentLoaded', () => {
  
  temples.forEach(temple => {
    //crear la seccion Principal (el section que contiene todo)
    const cardSec = document.createElement('section');
    cardSec.classList.add('temple-card');

    //crear y añadir el Nombre (H2)
    const nameH2 = document.createElement('h2');
    nameH2.textContent = temple.templeName;
    cardSec.appendChild(nameH2);

    //crear y añadir Ubicación, dedicacion y area (P)
    const locationP = document.createElement('p');
    locationP.innerHTML = `Location: ${temple.location}`;
    cardSec.appendChild(locationP);

    const dedicatedP = document.createElement('p');
    dedicatedP.innerHTML = `Dedicated: ${temple.dedicated}`;
    cardSec.appendChild(dedicatedP);
        
    const areaP = document.createElement('p');
    areaP.innerHTML = `Area: ${temple.area} sq ft`;
    cardSec.appendChild(areaP);

    //crear y añadir la Imagen (IMG) ---
    const imageImg = document.createElement('img');
    imageImg.src = temple.imageUrl;
    //atributo 'alt' y loading
    imageImg.setAttribute('loading', 'lazy');
    imageImg.alt = `photography of  ${temple.templeName} temple`;
    cardSec.appendChild(imageImg);

    //Añadir la tarjeta completa al contenedor principal en el DOM.
    templesContainer.appendChild(cardSec);
    });
})};

//templos viejos
const oldTemples = document.querySelector('#old');

oldTemples.addEventListener('click', () => {
  templesContainer.innerHTML = "";
  temples.forEach(temple => {
    const dedicatedString = temple.dedicated.split(',')[0].trim();
    const dedicatedYear = parseInt(dedicatedString);
    if (dedicatedYear < 1900){
      oldTemplesFilter(temple);
    }
  })
});

function oldTemplesFilter(temple){
  
  const cardSec = document.createElement('section');
  cardSec.classList.add('temple-card');

  const nameH2 = document.createElement('h2');
  nameH2.textContent = temple.templeName;
  cardSec.appendChild(nameH2);

  const locationP = document.createElement('p');
  locationP.innerHTML = `Location: ${temple.location}`;
  cardSec.appendChild(locationP);

  const dedicatedP = document.createElement('p');
  dedicatedP.innerHTML = `Dedicated: ${temple.dedicated}`;
  cardSec.appendChild(dedicatedP);
        
  const areaP = document.createElement('p');
  areaP.innerHTML = `Area: ${temple.area} sq ft`;
  cardSec.appendChild(areaP);

  const imageImg = document.createElement('img');
  imageImg.src = temple.imageUrl;

  imageImg.setAttribute('loading', 'lazy');
  imageImg.alt = `photography of  ${temple.templeName} temple`;
  cardSec.appendChild(imageImg);

  templesContainer.appendChild(cardSec);
    
};

//templos nuevoss
const newTemples = document.querySelector('#new');

newTemples.addEventListener('click', () => {
  templesContainer.innerHTML = "";
  temples.forEach(temple => {
    const dedicatedString = temple.dedicated.split(',')[0].trim();
    const dedicatedYear = parseInt(dedicatedString);
    if (dedicatedYear > 2000){
      oldTemplesFilter(temple);
    }
  })
});

//templos grandes
const largeTemples = document.querySelector('#large');

largeTemples.addEventListener('click', () => {
  templesContainer.innerHTML = "";
  temples.forEach(temple => {
    const sqFt = temple.area;
    if (sqFt > 90000){
      oldTemplesFilter(temple);
    }
  })
});

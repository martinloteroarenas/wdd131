document.getElementById("lastModified").innerHTML = document.lastModified;
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const templesContainer = document.getElementById('temples');

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/biggest.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/curve.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/colorfull.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yellow.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/red-white.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/blue.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/semi-colorfull.webp"
  },
  {
    templeName: "Bogota Colombia",
    location: "Bogotá Colombia",
    dedicated: "1999, April, 24-26",
    area: 53500,
    imageUrl:
    "images/fruits.webp"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla Colombia",
    dedicated:"2018, december, 9",
    area: 25349,
    imageUrl:
    "images/lirio.webp"
  },
  {
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba Bolivia",
    dedicated: "2000, April, 30",
    area: 35500,
    imageUrl:
    "images/funebre.webp"
  }
];

createTempleCard();

function createTempleCard(){

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
document.getElementById("lastModified").innerHTML = document.lastModified;
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const templesContainer = document.getElementById('temples');

const temples = [
  {
    templeName: "Floral Arrangement",
    location: "Large",
    dedicated: "wooden case",
    area: 200,
    imageUrl:
    "images/biggest.webp"
  },
  {
    templeName: "Floral Arrangement curved",
    location: "Large",
    dedicated: "wooden case",
    area: 180,
    imageUrl:
    "images/curve.webp"
  },
  {
    templeName: "Centerpiece",
    location: "Large",
    dedicated: "Ceramic case",
    area: 260,
    imageUrl:
    "images/colorfull.webp"
  },
  {
    templeName: "Yellow Floral Arrangement",
    location: "Medium",
    dedicated: "Wooden case",
    area: 180,
    imageUrl:
    "images/yellow.webp"
  },
  {
    templeName: "red/white Floral Arrangement",
    location: "Medium",
    dedicated: "Wooden case",
    area: 150,
    imageUrl:
    "images/red-white.webp"
  },
  {
    templeName: "Blue Bunch of Flowers",
    location: "small",
    dedicated: "none",
    area: 80,
    imageUrl:
    "images/blue.webp"
  },
  {
    templeName: "Semi Colorfull Floral Arrangement",
    location: "Large",
    dedicated: "Wooden case",
    area: 200,
    imageUrl:
    "images/semi-colorfull.webp"
  },
  {
    templeName: "Floral Arrangement with Fruits",
    location: "Medium",
    dedicated: "Wooden case",
    area: 140,
    imageUrl:
    "images/fruits.webp"
  },
  {
    templeName: "Bouquet",
    location: "small",
    dedicated:"none",
    area: 80,
    imageUrl:
    "images/lirio.webp"
  },
  {
    templeName: "Funeral Arrangement",
    location: "Large",
    dedicated: "Wooden case",
    area: 220,
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
    locationP.innerHTML = `Size: ${temple.location}`;
    cardSec.appendChild(locationP);

    const dedicatedP = document.createElement('p');
    dedicatedP.innerHTML = `Container: ${temple.dedicated}`;
    cardSec.appendChild(dedicatedP);
        
    const areaP = document.createElement('p');
    areaP.innerHTML = `Price: ${temple.area} $`;
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
document.getElementById("lastModified").innerHTML = document.lastModified;
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById("product_name");

    products.forEach(product => {
        const productElement = document.createElement("option");

        productElement.textContent = product.name;

        productElement.setAttribute("value", product.id);

        productElement.setAttribute("id", product.id);
        productElement.setAttribute("name", product.name);

        productSelect.appendChild(productElement);
    });
        
});
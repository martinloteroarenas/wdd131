document.getElementById("lastModified").innerHTML = document.lastModified;
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


let temperature = 27
let windSpeed = 7.4
function calculateWindChill(temperature, windSpeed){
    if (temperature <= 10 && windSpeed > 4.8){

        const vFactor = Math.pow(windSpeed, 0.16);
        
        const windChill = (
            13.12 + 
            (0.6215 * temperature) - 
            (11.37 * vFactor) + 
            (0.3965 * temperature * vFactor)
        );
        return Math.round(windChill*100)/100;
    }
    else{
        return "N/A";
    }
}


const windChillResult = calculateWindChill(temperature, windSpeed);

const resultEindChill = document.getElementById('windChill');
resultEindChill.textContent = windChillResult
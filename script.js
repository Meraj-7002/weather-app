let search = document.getElementById('search')
let input = document.getElementById('input')
let city = document.getElementById('location')
let tempOfCity = document.getElementById('temp')

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = "5da3e80ae86a6642d84eff89c075ad11"
search.addEventListener('click' , ()=>{
    if(input.value){
        let locationValue = input.value;
        fetchWeather(locationValue);
    } else {
        alert("Enter Valid City")
    }
})

function fetchWeather(locationValue){
    const url = `${apiUrl}?q=${locationValue}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        city.textContent = data.name;
        tempOfCity.textContent = `${Math.round(data.main.temp)}°C`
    })
    .catch(error => {
        console.log('Error Featching data', error)
    })
}
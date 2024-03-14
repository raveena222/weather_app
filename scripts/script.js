const butt = document.getElementById('button1');
const butt2 = document.getElementById('button2');
const sidebar = document.getElementById('sidebar');
const sidebar1 = document.getElementById('sidebar1');
const text = document.getElementById('text');

const apiKey = 'd8783e36ab3667b287c221afa55e16ac';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&appid=d8783e36ab3667b287c221afa55e16ac&units=metric&q='

async function fetchWeather() {
  const response = await fetch(apiUrl + text.value);
  var data = await response.json();
  console.log(data);

  text.innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.getElementById('num1').innerHTML = Math.round(data.wind.speed);
  document.getElementById('num2').innerHTML = Math.round(data.main.humidity);
  document.getElementById('num3').innerHTML = Math.round(data.main.feels_like);
  document.getElementById('num4').innerHTML = Math.round(data.main.pressure);
  document.getElementById('num5').innerHTML = data.name;
  document.getElementById('num9').innerHTML = Math.round(data.main.temp_min);
  document.getElementById('num7').innerHTML = Math.round(data.main.temp_max);

  document.getElementById('mood').innerHTML = data.weather[0].main;

  function setImageSource(weatherIcon) {
    const imageUrl = `${weatherIcon}.png`;
    document.getElementById("current-img").setAttribute("src", imageUrl);
  }
  setImageSource(data.weather[0].icon);

  const lat = data.coord.lat;
  console.log(lat);
  const lon = data.coord.lon;
  console.log(lon);

  async function forecast() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d8783e36ab3667b287c221afa55e16ac&units=metric`)
    var datas = await response.json();
    console.log(datas);

    function setImageSources(weatherIcon) {
      const imageUrl = `${weatherIcon}.png`;
      document.getElementById('for1').setAttribute("src", imageUrl);
    }
    setImageSources(datas.list[1].weather[0].icon);

    function setImageSources1(weatherIcon) {
      const imageUrl = `${weatherIcon}.png`;
      document.getElementById('for2').setAttribute("src", imageUrl);
    }
    setImageSources1(datas.list[2].weather[0].icon);

    function setImageSources2(weatherIcon) {
      const imageUrl = `${weatherIcon}.png`;
      document.getElementById('for3').setAttribute("src", imageUrl);
    }
    setImageSources2(datas.list[3].weather[0].icon);

    function setImageSources3(weatherIcon) {
      const imageUrl = `${weatherIcon}.png`;
      document.getElementById('for4').setAttribute("src", imageUrl);
    }
    setImageSources3(datas.list[4].weather[0].icon);


    function setImageSources4(weatherIcon) {
      const imageUrl = `${weatherIcon}.png`;
      document.getElementById('for5').setAttribute("src", imageUrl);
    }
    setImageSources4(datas.list[5].weather[0].icon);

    document.getElementById('min1').innerHTML = Math.round(datas.list[1].main.temp_min) + '°C';
    document.getElementById('min2').innerHTML = Math.round(datas.list[2].main.temp_min) + '°C';
    document.getElementById('min3').innerHTML = Math.round(datas.list[3].main.temp_min) + '°C';
    document.getElementById('min4').innerHTML = Math.round(datas.list[4].main.temp_min) + '°C';
    document.getElementById('min5').innerHTML = Math.round(datas.list[5].main.temp_min) + '°C';

    document.getElementById('max1').innerHTML = Math.round(datas.list[1].main.temp_max) + '°C';
    document.getElementById('max2').innerHTML = Math.round(datas.list[2].main.temp_max) + '°C';
    document.getElementById('max3').innerHTML = Math.round(datas.list[3].main.temp_max) + '°C';
    document.getElementById('max4').innerHTML = Math.round(datas.list[4].main.temp_max) + '°C';
    document.getElementById('max5').innerHTML = Math.round(datas.list[5].main.temp_max) + '°C';
  }
  forecast();
}


function openSearch() {
  sidebar.style.display = "none";
  sidebar1.style.display = "flex";
}

function closeSearch() {
  sidebar.style.display = "flex";
  sidebar1.style.display = "none";
}

butt.addEventListener('click', openSearch);

const cross = document.querySelector('.cross');
cross.addEventListener('click', closeSearch);
butt2.addEventListener('click', closeSearch);

let a = new Date();
let month = ("0" + (a.getMonth() + 1)).slice(-2);
let date = ("0" + a.getDate()).slice(-2);

if (month == 1)
  month = 'Jan';
if (month == 2)
  month = 'Feb';
if (month == 3)
  month = 'Mar';
if (month == 4)
  month = 'Apr';
if (month == 5)
  month = 'May';
if (month == 6)
  month = 'Jun';
if (month == 7)
  month = 'Jul';
if (month == 8)
  month = 'Aug';
if (month == 9)
  month = 'Sep';
if (month == 10)
  month = 'Oct';
if (month == 11)
  month = 'Nov';
if (month == 12)
  month = 'Dec';


document.getElementById('num6').innerHTML = date + " " + month;

document.getElementById('day1').innerHTML = ++date + " " + month;

document.getElementById('day2').innerHTML = ++date + " " + month;

document.getElementById('day3').innerHTML = ++date + " " + month;

document.getElementById('day4').innerHTML = ++date + " " + month;

document.getElementById('day5').innerHTML = ++date + " " + month;

document.addEventListener("DOMContentLoaded", function () {
  ;
  text.addEventListener("input", function () {
    const searchTerm = this.value;
    if (searchTerm.length >= 3) {
      fetchCities(searchTerm);
    } 
  });
});





function fetchCities(searchTerm) {
  const apiKey1 = "c9764ebd64msh96d47b766e38575p1e82e1jsna163d036aebf";
  const endpoint = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${searchTerm}`;

  fetch(endpoint, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey1,
    }
  })
    .then(response => response.json())
    .then(data => displayAutocompleteResults(data))
    .catch(error => console.error("Error fetching cities:", error));
}



function displayAutocompleteResults(data) {
  const autocompleteDropdown = document.querySelector(".areas");

  // Clear previous results
  autocompleteDropdown.innerHTML = "";

  if (data && data.data && data.data.length > 0) {
    // Create a container for the autocomplete dropdown
    const dropdownContainer = document.createElement("div");
    dropdownContainer.className = "area1";

    data.data.forEach(city => {
      // Create a div element for each city suggestion
      const suggestionItem = document.createElement("div");
      suggestionItem.className = "area";
      suggestionItem.textContent = city.name;

      suggestionItem.addEventListener("click", function () {
        // When a suggestion is clicked, populate the input field with the selected city
        text.value = city.name;
        // Clear the autocomplete dropdown
        autocompleteDropdown.innerHTML = "";
      });

      dropdownContainer.appendChild(suggestionItem);
    });

    // Append the container with suggestions to the autocompleteDropdown element
    autocompleteDropdown.appendChild(dropdownContainer);
  }
}





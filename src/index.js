function updateDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekDay = weekDays[date.getDay()];

  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${weekDay}, ${hour}:${minutes}`;
}

function displayWeather(response) {
  let currentTemperatureElement = document.querySelector(
    "#current-temperature"
  );
  let currentTemperature = Math.round(response.data.temperature.current);
  currentTemperatureElement.innerHTML = `${currentTemperature}°C`;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let city = searchInput.value;

  let apiKey = "aof4801f27bc8e543a47a5fc535tf9b8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units = "metric")}`;
  axios.get(apiUrl).then(displayWeather);
}

let date = document.querySelector("#current-date");
let currentDate = new Date();

date.innerHTML = updateDate(currentDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

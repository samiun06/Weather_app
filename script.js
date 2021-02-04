const apiKey = "8517f8a5d8e1b0cce83c0f5bfed42c1b";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateWeather(data))
}

document.querySelector("#search-btn").addEventListener("click", () => {
    const getWeatherInput = document.querySelector("#searched-city").value;
    getWeather(getWeatherInput);
})

const updateWeather = data => {
    document.querySelector("#city-name").innerText = data.name;
    document.querySelector("#temperature").innerText = data.main.temp;
    document.querySelector(".lead").innerText = data.weather[0].main;
    document.querySelector("#icon").setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.querySelector("#searched-city").value = "";
}

getWeather("Dhaka");
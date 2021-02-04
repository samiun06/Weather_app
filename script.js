const apiKey = "8517f8a5d8e1b0cce83c0f5bfed42c1b";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => updateWeather(data));
}

document.getElementById("search").addEventListener("click", () => {
    const cityInput = document.getElementById("city-input").value;
    getWeather(cityInput);
})

function updateWeather(data) {
    document.getElementById("city-name").innerText = data.name || "unknown city";
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("weather").innerText = data.weather[0].main;
    document.getElementById("icon").setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("city-input").value = "";
}

getWeather("Dhaka");
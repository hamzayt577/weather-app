//API KEY
const apiKey = "dbcb8fc0c00b569f34b872dba454e4f8";

// Element vars
const inputCityName = document.querySelector(".enter-city-name");
const submitCityBtn = document.querySelector(".submit");

const cityName = document.querySelector(".city-name");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");

// Deliver data to user
submitCityBtn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCityName.value}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      cityName.innerHTML = data["name"];
      desc.innerHTML = data["weather"][0]["description"];

      let celsiusValue = Math.round(data["main"]["temp"] - 273.15);
      temp.innerHTML = `${celsiusValue}°`;

      inputCityName.value = "";
    })
    .catch((err) => console.log(err));
});

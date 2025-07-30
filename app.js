const apiKey = "b0d8a1bfe7b69203a82557fc0f1b145b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".Weather").style.display ="none";
  }

  else{
var data = await response.json();

  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km /h";


  if (data.weather[0].main == "Clouds"){
   weatherIcon.src = "images/clouds.png"; 
  }
    else if (data.weather[0].main =="Clear"){
      weatherIcon.src = "images/clear.png";
    
    }
  else  if (data.weather[0].main =="Rain"){
      weatherIcon.src = "images/rain.png";
    
    }
  else  if (data.weather[0].main =="Drizzle"){
      weatherIcon.src = "images/drizzle.png";
    
    }
  else  if (data.weather[0].main =="Mist")
      weatherIcon.src = "images/mist.png";
    
    }

    
    
    
    
    
    
  }
  searchbtn.addEventListener("click", ()=>{
    
    checkWeather(searchBox.value);
     document.querySelector(".error").style.display ="none";
    document.querySelector(".Weather").style.display = "block";
  

  })



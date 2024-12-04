const apiKey ="28132ab85f162d65ad26538791bec51a";
    const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchBox = document.querySelector(".input-box input");
    const searchBtn = document.querySelector(".input-box button");
    const weatherIcon = document.querySelector(".box-img");
    
    async function checkWeather(city){
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

      if (response.status == 404){
        document.querySelector(".error").style.display ="flex";
        document.querySelector(".weather").style.display ="none";
      }   else{
        var data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".tempe").innerHTML =Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity-num").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind-num").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/4102315_cloud_weather_icon.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/544200.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/weather07-256.webp";}
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/weather11-128.webp";}
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/weather_39-512.webp";}
    
    document.querySelector(".weather").style.display ="flex";
    document.querySelector(".error").style.display ="none";


      }


    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    }
    )
let apiKey = 'b43323da3e21ddd1204ba06cff129138'
document.getElementById('search-box').onsubmit = function(event){
  event.preventDefault();
  let city = document.getElementById("search-bar").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+ apiKey +'&units=metric&lang=hu&exclude=daily')
      .then(response => response.json())
      .then(data => 
        document.getElementById('result').innerHTML= 
      `<p class="city">${data.name}</p>
      <p class="temp">Hőmérséklet: ${Math.round(data.main.temp)}&#8451</p>
      <div class="box0">
        <div class="icon">
          <img class="icon-img"src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        </div>
      </div>
      <div class="box1">
        <p class="description">${data.weather[0].description}</p>
        <p class="feels-temp">Hőérzet: ${Math.round(data.main.feels_like)}&#8451</p>
      </div>
      <div class="box2">
        <p class="min-temp">Hőmérséklet minimum: ${Math.round(data.main.temp_min)}&#8451</p>
        <p class="max-temp">Maximum: ${Math.round(data.main.temp_max)}&#8451</p>
      </div>
      <div class="box3">
        <p class="pressure">Légnyomás: ${data.main.pressure} hpa</p>
        <p class="huidity">Páratartalom: ${data.main.humidity}%</p>
      </div>
      <div class="box4">
        <p class="wind">Szélerősség: ${Math.round(data.wind.speed*3.6)} km/h<img class="wind-deg" src="./img/wind.png" alt="wind" style="transform: rotate(${data.wind.deg}deg);"></p>
      </div>
      <div class="box5">
        <p class="sunrise">Napkelte: ${window.moment((data.sys.sunrise)*1000).format('HH:mm ')}</p>
        <p class="sunset">Napnyugta: ${window.moment((data.sys.sunset)*1000).format('HH:mm ')}</p> 
      </div>
      `
            
      )
      .catch(error => document.getElementById('result').innerHTML=`<p class="error">A keresett hely nem található!</p>`)    
    
}






  
  // openweather script
  window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '719819',appid: 'b43323da3e21ddd1204ba06cff129138',units: 'metric',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
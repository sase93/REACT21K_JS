async function getTemp() {
    let cityName = String(document.querySelector("#city").value);
    let key = "f2551d3f5703d94832f09915ed072cc9";

    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`);
    let json = await response.json();
    let info = json.main.temp;
    
    answer.textContent = `The current temperature in ${cityName} is around ${Math.round(info)}°C.`;
}
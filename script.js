//const url = ;
//console.log(url)
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1c56551329mshbf7e474b1b2eecfp1deba7jsn2787a341f415',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};
const getWeather=(city)=>
{
    cityName.innerHTML=city
    const response = fetch('https://weather-api138.p.rapidapi.com/weather?city_name='+city, options)
    .then(response =>response.json())
    .then(response => {
        temperature2.innerHTML=Math.round((response.main['temp'] - 273.15))
        temperature.innerHTML=Math.round((response.main['temp'] - 273.15))
        temperatureMax.innerHTML=response.main['temp_max']
        temperatureMin.innerHTML=response.main['temp_min']
        feels_like.innerHTML=response.main['feels_like']
        humidity.innerHTML=response.main['humidity']
        humidity2.innerHTML=response.main['humidity']
        windspeed.innerHTML=response.wind['speed']
        windspeed2.innerHTML=response.wind['speed']
        winddegree.innerHTML=response.wind['deg']
        sunrise.innerHTML=response.sys['sunrise']
        sunset.innerHTML=response.sys['sunset']
        weathercondition.innerHTML=response.weather[0]['main']
        weatherdescription.innerHTML=response.weather[0]['description']
        console.log(response)})
    .catch(err=>console.error(err))
}

 submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
async  function GetWeatherData(){
    const cityNAME=document.querySelector("#cityInput").value
   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNAME}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
    .then(res=>res.json())
    .then(data=>renderData(data))
}
function renderData(data){
    document.querySelector("#dataResult").innerHTML=`
            <h3> ${data.name}   (<i> ${data.sys.country}</i>)</h3>
            <p> <b>Temprature:</b>${data.main.temp}</p>
            <p>
            <b>${data.weather[0].main}</b>:${data.weather[0].main.discription}
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
            </p>
    
    `
}
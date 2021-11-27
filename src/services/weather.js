class Weather{

    baseUrl = 'https://api.open-meteo.com/v1/forecast?'
    //47.22, 39.63
    getWeather(lat, lng){
        fetch(this.baseUrl +`latitude=${lat}&longitude=${lng}&hourly=temperature_2m`)
            .then((response)=>{return response.json()})
            .then((data)=>{
                console.log(data.hourly.temperature_2m)
            })
    }
}

export default Weather
const getWeather = async () => {

    let data = {latitude: 40.7589111328125,
        longitude: -73.97901916503906
        }
            
    try {
        const url = `https://api.darksky.net/forecast/7230d99b5178d366be7a3cd07111259d/${data.latitude +','+ data.longitude}`
        console.log(url)
        const response = await fetch(url, {
            method: 'GET', 
            mode: 'no-cors',
            // headers: { "Content-Type": "application/json" },
        });
        console.log(response)
        const output = await response.json();
        // setWeatherObject(output);
        
        
    } catch (error) {
    console.log(error);
    };
    
};

getWeather()
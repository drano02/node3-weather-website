const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=83320d5478c294317b1ee7b693cadb9d&query='+latitude+','+longitude+'&units=f'
    // console.log('forecasturl: ', url)
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('The weather API is not available right now!', undefined)
        } else if (body.error) {
            // callback('Unable to find location. Coordinates invalid.', undefined)
            callback(body.error, undefined)
        } else {
            callback(undefined,
                 'The temperature is currently '+body.current.temperature+' but it feels like '+body.current.feelslike+'. The wind is from the '+body.current.wind_dir+' at '+body.current.wind_speed+' MPH.'
            //     {
            //     temperature: response.body.current.temperature,
            //     feelslike: response.body.current.feelslike
            // }
            )
        }
    })
}

module.exports = forecast

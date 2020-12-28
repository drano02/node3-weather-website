const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=83320d5478c294317b1ee7b693cadb9d&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log(error)
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//         console.log(response.body.error)
//     } else {
//         const current = response.body.current
//         // console.log(current)
//         console.log('The temperature is currently '+current.temperature+' but it feels like '+current.feelslike)
//     }
// })

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
                 'The temperature is currently '+body.current.temperature+' but it feels like '+body.current.feelslike
            //     {
            //     temperature: response.body.current.temperature,
            //     feelslike: response.body.current.feelslike
            // }
            )
        }
    })
}

module.exports = forecast

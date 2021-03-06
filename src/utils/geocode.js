const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZHJhbm8wMiIsImEiOiJja2lwMGVxcHQwMDkyMnFtbzI0aXZ6Y3Y3In0.VfsgZCWCT1FLsf1UDQNwDg&limit=1'
    // console.log('geourl: ', url)
    request({ url, json: true}, (error, { body}) => {
        // console.log(response.body)
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

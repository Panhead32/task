const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const jsonPath = require('jsonpath')

class GetTemperature {
    constructor(city) {
        this.city = city
    }

    get() {
        const url = `https://goweather.herokuapp.com/weather/${this.city}`
        const req = new XMLHttpRequest()

        req.open('GET', url, true)
        req.send()

        req.onreadystatechange = function () {

            if (req.readyState !== 4) {
                return
            }

            if (req.status === 200) {
                console.log(jsonPath.query( JSON.parse(req.responseText), '$.temperature' ))
            }
        }
    }

}

const temp = new GetTemperature('Kyiv')
temp.get()

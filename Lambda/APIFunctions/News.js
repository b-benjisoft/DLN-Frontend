const request = require('../node_modules/request');
const Response = require("../Response")
const codes = require("./NewsCodes.js")

module.exports = {
    getNews: function (payload) {
        ccode = codes.getCountryCode(payload["Country Code"])
        console.log(ccode)
        request('https://newsapi.org/v2/top-headlines?apiKey=c26b8ebdba81482e90d5b05d38336682&country=' + ccode, function (error, response, body) {
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            let description = JSON.parse(body)["articles"]["0"]["description"]
            if (response.statusCode != 200) {
                var errorStatus = true
            } else {
                var errorStatus = false
            }
            console.log(description)
            Response.send(errorStatus, description, payload["Phone Number"]);
            break;
        });
    }
}
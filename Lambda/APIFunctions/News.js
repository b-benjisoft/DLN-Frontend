const request = require('../node_modules/request');
const Response = require("../Response")
const codes = require("./NewsCodes.js")

module.exports = {
    getNews: function (payload) {
        console.log("Country", payload["Parameters"]["Country Code"])
        ccode = codes.getCountryCode(payload["Parameters"]["Country Code"])
        console.log("Country Code", ccode)
        request('https://newsapi.org/v2/top-headlines?apiKey=c26b8ebdba81482e90d5b05d38336682&country=' + ccode, function (error, response, body) {
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            var description = "";
            if (body.totalResults == 0) {
                errorStatus = true;
            } else {
                errorStatus = false;
                description = JSON.parse(body)["articles"]["0"]["description"];
            }
            console.log(description)
            Response.send(errorStatus, description, payload["Phone Number"]);
        });
    }
}
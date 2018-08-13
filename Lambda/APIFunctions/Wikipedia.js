const request = require('../node_modules/request');
const Response = require("../Response")
module.exports = {
    execute: function (payload) {
        request('https://en.wikipedia.org/api/rest_v1/page/summary/' + payload["Parameters"]["Search Query"], function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            let description = JSON.parse(body)["description"]
            if (response.statusCode != 200) {
                var errorStatus = true
            } else {
                var errorStatus = false
            }
            console.log(description)
            Response.send(errorStatus, description, payload["Phone Number"]);
        });
    }
}
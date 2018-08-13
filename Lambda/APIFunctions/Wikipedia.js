const wikipedia = require("../node_modules/node-wikipedia");
const htmlToJson = require("../node_modules/html-to-json");
const Response = require("../Response")
module.exports = {execute:
    function(payload) {
        wikipedia.page.data(payload["Parameters"]["Search Query"], {
            content: true
        }, function (response) {
            page = response["text"]["*"];

            htmlToJson.parse(page, {
                'text': function ($doc) {
                    let base_description = $doc.find('p').text();
                    let description = base_description
                    description = description.split(".")[0] // just get the first sentence

                    let i = 0;
                    while (description.length < 100) {
                        i += 1
                        description += base_description.split(".")[i]
                    }

                    while (description.length > 160) {
                        description = description.split(", ")
                        description.pop()
                        description = description.toString(); // removes last clause
                    }
                    Response.send(description, payload["Phone Number"]);
                }
            })
        })
    }
}
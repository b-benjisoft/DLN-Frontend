const request = require('request');

module.exports = {
    send: function (sms) {
        var message = "Message received from " + sms["sender"] + ":" + 
                              "\nFunction: " + sms["body"]["intendedFunction"] + 
                              "\nQuery:" + sms["body"]["query"]

        request.post(
        'https://hooks.slack.com/services/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',
        { json: {"text": message} },

        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
        );
    },
};
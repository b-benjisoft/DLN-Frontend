const Nexmo = require('nexmo');
const debugMode = true;

module.exports = {
    send: function (errorStatus, response, phoneNumber) {
        if (debugMode){
            if (errorStatus) {
                console.log("Response: Query not valid.");
                return ("Query not valid.")
            } else {
                console.log("Response:", response);
                return ("Message sent successfully");
            }
        }else{
            var nexmo = new Nexmo({
                apiKey: "c04da579",
                apiSecret: "6245e4a5cf7a9299"
            });
            if (errorStatus) {
                nexmo.message.sendSms("447418342669", phoneNumber, "Query not valid.");
                return ("Query not valid.")
            } else {
                nexmo.message.sendSms("447418342669", phoneNumber, response);
                return ("Message sent successfully");
            }
        }
    }
};
const Nexmo = require('nexmo');

module.exports = {send: function(response, phoneNumber) {
    var nexmo = new Nexmo({
        apiKey: "c04da579", 
        apiSecret: "6245e4a5cf7a9299"
        }
    );
    
    nexmo.message.sendSms("447418342669", phoneNumber, response);
}};
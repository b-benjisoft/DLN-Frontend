const Nexmo = require('nexmo');

module.exports = {send: function(response, phoneNumber, error) {
    var nexmo = new Nexmo({
        apiKey: "c04da579", 
        apiSecret: "6245e4a5cf7a9299"
        }
    );
    if (error != null){    
        nexmo.message.sendSms("447418342669", phoneNumber, response);
        return("Message sent successfully");
}
    else{
        nexmo.message.sendSms("447418342669", phoneNumber, "Query not valid.");
        return("Query not valid.")
    }
}};
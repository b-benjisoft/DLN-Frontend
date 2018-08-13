exports.handler = function (event, context) {
    const Nexmo = require('nexmo')

    const nexmo = new Nexmo({
        apiKey: "c04da579",
        apiSecret: "6245e4a5cf7a9299"
    })

    const from = 'BenjiSoft'
    const to = 447809128262
    const text = 'A text message sent using the Nexmo SMS API'

    nexmo.message.sendSms(from, to, text)
};
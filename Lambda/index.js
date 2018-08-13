const slackReport = require('./slackReport');
const forwardQuery = require('./forwardQuery')

exports.handler = (event, context, callback) => {
    const rawQuery = event["queryStringParameters"];
    const rawText = rawQuery["text"].toLowerCase().split(":");
    const sms = {"body":    {"intendedFunction": rawText[0],
                             "query":            rawText[1]},
                 "sender":  rawQuery["msisdn"]};

                 if (rawText == null) {
                     callback(error, "No input")
                 }
    slackReport.send(sms)
    forwardQuery.sort(sms["body"]["intendedFunction"], sms["body"]["query"], sms["sender"])
    var response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": "",
        "isBase64Encoded": false
    };
    callback();
};
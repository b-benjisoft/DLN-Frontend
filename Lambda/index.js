const slackReport = require('./slackReport');
const forwardQuery = require('./forwardQuery')

exports.handler = (event, context, callback) => {
    const rawQuery = event["queryStringParameters"];
    const rawText = rawQuery["text"].toLowerCase().split(":");
    const sms = {"body":    {"intendedFunction": rawText[0],
                             "query":            rawText[1]},
                 "sender":  rawQuery["msisdn"]};
    
    console.log("Query: ", sms["body"])

    console.log("Intended Function: ", sms["body"]["intendedFunction"])
    slackReport.send(sms)
    forwardQuery.sort(sms["body"]["intendedFunction"], sms["body"]["query"], sms["sender"], context)
    var response = {
        "statusCode": 200,
        "isBase64Encoded": false
    };
    callback(null, response);
}

const APIFunctions = {
    "Dictionary": require('./APIFunctions/Dictionary.js'),
    "News": require('./APIFunctions/News.js'),
    "Trains": require('./APIFunctions/Trains.js'),
    "Translate": require('./APIFunctions/Translate.js'),
    "Weather": require("./APIFunctions/Weather.js"),
    "Wikipedia": require("./APIFunctions/Wikipedia.js")
}

module.exports = {
    sort: function (intendedFunction, query, phoneNumber) {
        switch(intendedFunction) {
            case "translate": {
                let queryParameters = query.split(" to ")
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Untranslated Phrase":   queryParameters[0],
                                    "Target Language":       queryParameters[1]}}

                APIFunctions["Translate"](payload); }
                
            case "wikipedia":
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Search Query": query}}
                APIFunctions["Wikipedia"].execute(payload)

            case "news":
                break;
                
            case "dictionary": //define?
                break;
                
            case "weather":
                break;
                
            case "trains": {
                let queryParameters = query.split(" to ")
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                "Origin Station":        queryParameters[0],
                                "Destination Station":   queryParameters[1]}}

                APIFunctions["Trains"](payload); }
                
            case "buses":
                break;
                
            default:
                return "Invalid Function"
        }
    
    },
};
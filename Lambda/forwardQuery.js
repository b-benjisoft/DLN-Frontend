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
            case "translate": { // In Progress [Bemmons]
                console.log("Translate Fire")
                var queryParameters = query.split(" to ")
                var payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Untranslated Phrase":   queryParameters[0],
                                    "Target Language":       queryParameters[1]}}

                APIFunctions["Translate"](payload); }
                
            case "wikipedia": // Done [Bemmons]
                console.log("Wikipedia fire")
                var payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Search Query": query}}
                APIFunctions["Wikipedia"].execute(payload)

            case "news": // Done Badly [Benji]
                console.log("News Fire")
                var payload = {"Phone Number": phoneNumber}
                APIFunctions["News"].execute(payload)
                
            case "dictionary": //define? Yes // To do
                break;
                
            case "weather": // To Do
                break;
                
            case "trains": { // To do [Benji]
                console.log("Trains Fire")
                var queryParameters = query.split(" to ")
                var payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                "Origin Station":        queryParameters[0],
                                "Destination Station":   queryParameters[1]}}

                APIFunctions["Trains"](payload); }
                
            case "buses": // To do
                break;
                
            default:
                return "Invalid Function"
        }
    
    },
};
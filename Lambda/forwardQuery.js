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
                let queryParameters = query.split(" to ");
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Untranslated Phrase":   queryParameters[0],
                                    "Target Language":       queryParameters[1]}};
                APIFunctions["Translate"].getTranslation(payload); 
                break;
            }
                
            case "wikipedia": {// Done [Bemmons]
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Search Query": query}};
                APIFunctions["Wikipedia"].getSummary(payload);
                break;
            }

            case "news": {// Done Badly [Benji]
                let payload = {"Phone Number": phoneNumber,
                                "Parameters":{
                                    "Country Code": query
                                }
            }
                APIFunctions["News"].getNews(payload);
                break;
            }
                
            case "dictionary": {//define? Yes // To do
                break;}
                
            case "weather":{ // To Do
                break;}
                
            case "trains": { // To do [Benji]
                let queryParameters = query.split(" to ");
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                "Origin Station":        queryParameters[0],
                                "Destination Station":   queryParameters[1]
                            }}

                APIFunctions["Trains"].execute(payload); 
                break;
            }
                
            case "buses": {// To do
                break;}
                
            default:
                return "Invalid Function"
        }
    
    },
};
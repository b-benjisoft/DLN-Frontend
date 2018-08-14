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
                let queryParameters = query.split(" to ")
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Untranslated Phrase":   queryParameters[0],
                                    "Target Language":       queryParameters[1]}}
                APIFunctions["Translate"].execute(payload); }
                
            case "wikipedia": {// Done [Bemmons]
                console.log("Wikipedia fire")
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                    "Search Query": query}}
                APIFunctions["Wikipedia"].execute(payload)}

            case "news": {// Done Badly [Benji]
                console.log("News Fire")
                let payload = {"Phone Number": phoneNumber}
                APIFunctions["News"].execute(payload)}
                
            case "dictionary": {//define? Yes // To do
                console.log("Dictionary Fire")
                break;}
                
            case "weather":{ // To Do
                console.log("Weather Fire")
                break;}
                
            case "trains": { // To do [Benji]
                console.log("Trains Fire")
                let queryParameters = query.split(" to ")
                let payload = {"Phone Number": phoneNumber,
                               "Parameters":{
                                "Origin Station":        queryParameters[0],
                                "Destination Station":   queryParameters[1]}}

                APIFunctions["Trains"].execute(payload); }
                
            case "buses": {// To do
                console.log("Busses fire")
                break;}
                
            default: {
                return "Invalid Function"}
        }
    
    },
};
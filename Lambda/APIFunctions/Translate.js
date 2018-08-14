const codes = require("./countryCodes.json")

function LanguageToCode(language){
    codes.forEach(function(code){
        if (language == code["name"]){
            return code["code"]
        }
        break;
    })
}

LanguageToCode("English")
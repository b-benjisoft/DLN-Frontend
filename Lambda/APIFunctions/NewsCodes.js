const isoCountries = require("./countryCodes.json")
module.exports = {
	getCountryCode: function (countryName) {		
		var code = isoCountries[countryName];
		console.log("NewsCodes Country", countryName)
		console.log("NewsCodes Code", code)

		if (code == undefined){
			return("GB")
		}
		return(code);
		}


}
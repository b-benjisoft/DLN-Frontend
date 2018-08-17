module.exports = {
	getCountryCode: function (countryName) {
		const isoCountries = require("./newsCodes.json")
		console.log("isoCountries:", JSON.stringify(isoCountries));	
		var code = isoCountries[countryName];
		console.log(typeof isoCountries);
		console.log("NewsCodes Country", countryName);
		console.log("NewsCodes Code", code);

		if (code == undefined){
			return("GB")
		}else{
			return(code);
		}
	}


}
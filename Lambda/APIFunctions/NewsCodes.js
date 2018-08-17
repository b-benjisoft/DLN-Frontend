module.exports = {
	getCountryCode: function (countryName) {
		const isoCountries = JSON.parse(require("./newsCodes.json"))
		console.log("isoCountries:", JSON.stringify(isoCountries));	
		var code = isoCountries[countryName];
		console.log("NewsCodes Country", countryName);
		console.log("NewsCodes Code", code);

		if (code == undefined){
			return("GB")
		}else{
			return(code);
		}
	}


}
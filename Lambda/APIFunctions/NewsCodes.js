module.exports = {
	getCountryCode: function (countryName) {
		var isoCountries = 
		{
			"argentina": "AR",
			"australia": "AU",
			"austria": "AT",
			"belgium": "BE",
			"brazil": "BR",
			"bulgaria": "BG",
			"canada": "CA",
			"china": "CN",
			"colombia": "CO",
			"cuba": "CU",
			"czech republic": "CZ",
			"egypt": "EG",
			"france": "FR",
			"germany": "DE",
			"greece": "GR",
			"hong kong": "HK",
			"hungary": "HU",
			"india": "IN",
			"indonesia": "ID",
			"ireland": "IE",
			"israel": "IL",
			"italy": "IT",
			"japan": "JP",
			"korea": "KR",
			"latvia": "LV",
			"lithuania": "LT",
			"malaysia": "MY",
			"mexico": "MX",
			"morocco": "MA",
			"netherlands": "NL",
			"new zealand": "NZ",
			"nigeria": "NG",
			"norway": "NO",
			"philippines": "PH",
			"poland": "PL",
			"portugal": "PT",
			"romania": "RO",
			"russian federation": "RU",
			"saudi arabia": "SA",
			"serbia": "RS",
			"singapore": "SG",
			"slovakia": "SK",
			"slovenia": "SI",
			"south africa": "ZA",
			"sweden": "SE",
			"switzerland": "CH",
			"taiwan": "TW",
			"thailand": "TH",
			"turkey": "TR",
			"ukraine": "UA",
			"united arab emirates": "AE",
			"united kingdom": "GB",
			"england": "GB",
			"united states": "US",
			"venezuela": "VE"
		}
 
 
		try {
			return isoCountries[countryName];
		} 
		catch(error) {
			console.log(error);
			return("GB");
		}
	}
}
module.exports = {
	getCountryCode: function (countryName) {
		var isoCountries = {
			'Argentina': 'AR',
			'Australia': 'AU',
			'Austria': 'AT',
			'Belgium': 'BE',
			'Brazil': 'BR',
			'Bulgaria': 'BG',
			'Canada': 'CA',
			'China': 'CN',
			'Colombia': 'CO',
			'Cuba': 'CU',
			'Czech Republic': 'CZ',
			'Egypt': 'EG',
			'France': 'FR',
			'Germany': 'DE',
			'Greece': 'GR',
			'Hong Kong': 'HK',
			'Hungary': 'HU',
			'India': 'IN',
			'Indonesia': 'ID',
			'Ireland': 'IE',
			'Israel': 'IL',
			'Italy': 'IT',
			'Japan': 'JP',
			'Korea': 'KR',
			'Latvia': 'LV',
			'Lithuania': 'LT',
			'Malaysia': 'MY',
			'Mexico': 'MX',
			'Morocco': 'MA',
			'Netherlands': 'NL',
			'New Zealand': 'NZ',
			'Nigeria': 'NG',
			'Norway': 'NO',
			'Philippines': 'PH',
			'Poland': 'PL',
			'Portugal': 'PT',
			'Romania': 'RO',
			'Russian Federation': 'RU',
			'Saudi Arabia': 'SA',
			'Serbia': 'RS',
			'Singapore': 'SG',
			'Slovakia': 'SK',
			'Slovenia': 'SI',
			'South Africa': 'ZA',
			'Sweden': 'SE',
			'Switzerland': 'CH',
			'Taiwan': 'TW',
			'Thailand': 'TH',
			'Turkey': 'TR',
			'Ukraine': 'UA',
			'United Arab Emirates': 'AE',
			'United Kingdom': 'GB',
			'England': 'GB',
			'United States': 'US',
			'Venezuela': 'VE'
			};
		
		try {
			countryName = countryName.charAt(0).toUpperCase() + this.slice(1);
			return isoCountries[contryName];
		} 
		catch(error) {
			throw("Invalid Country Code")
			return("GB");
		}
	}
}
const codes = require("./stationCodes.json")
const soapRequest = require('easy-soap-request');
const fs = require('fs');

function StationToCode(language){
    codes.forEach(function(code){
        if (station == code["Station Name"]){
            return code["CRS Code"]
        }
    })
}

StationToCode("Bracknell")

// example data
const url = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2017-10-01';
const headers = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('test/zipCodeEnvelope.xml', 'utf-8');

// usage of module
(async () => {
  const { response } = await soapRequest(url, headers, xml);
  const { body, statusCode } = response;
  console.log(body);
  console.log(statusCode);
})();
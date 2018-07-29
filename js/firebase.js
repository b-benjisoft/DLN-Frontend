

var config = {
    databaseURL: "https://dataless-network.firebaseio.com",
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

function runScript(e){
    //if (e.key == 13){
        var number = $("#phone").intlTelInput("getNumber");
        firebase.database().ref('Phone/'+number).set({
            phone: number,
            credits: 5,
            country: $("#phone").intlTelInput("getExtension")
        })
        console.log("working!")
    //}
}
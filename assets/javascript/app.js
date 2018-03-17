// Initialize Firebase
var config = {
apiKey: "AIzaSyDsz7oW5M1PfjjB7dg30V3nSIXi51klm-I",
authDomain: "train-activity-f83b8.firebaseapp.com",
databaseURL: "https://train-activity-f83b8.firebaseio.com",
projectId: "train-activity-f83b8",
storageBucket: "train-activity-f83b8.appspot.com",
messagingSenderId: "781438580436"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-btn").on("click", function() {
    // Don't refresh the page!
    event.preventDefault();
    database.ref().push({
      Train_Name: $("#name-input").val().trim(),
      Destination: $("#dest-input").val().trim(),
      Frequency: $("#freq-input").val(),
      First_Train: $("#first-input").val().trim(),
    });
    
    
});
  


database.ref().on("child_added", function(childSnapshot) {



// full list of items
$("#train-body").append("<tr><td class='col1'> " + childSnapshot.val().Train_Name +
    " </td><td class='col2'> " + childSnapshot.val().Destination +
    " </td><td class='col3'> " + childSnapshot.val().Frequency +
    " </td><td class='col4'>  value  </td><td class= 'col5'> value </td></tr>");

// Handle the errors
}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
});

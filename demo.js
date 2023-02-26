
  // Import the functions you need from the SDKs you need
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpakRKgJWMOOn_Otg5bejiLIUzsSHYr80",
  authDomain: "esp32-725ab.firebaseapp.com",
  databaseURL: "https://esp32-725ab-default-rtdb.firebaseio.com",
  projectId: "esp32-725ab",
  storageBucket: "esp32-725ab.appspot.com",
  messagingSenderId: "383164957322",
  appId: "1:383164957322:web:b5514d04260f89e2bd6373",
  measurementId: "G-ZWRF2QETPG"
};

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref("/Light").on("value", function(snapshot) {
  var light = snapshot.val();
  document.getElementById("dosang").innerHTML = light;
});
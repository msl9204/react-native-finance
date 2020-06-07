// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
var firebaseConfig = require("../../config/firebase_keys");

// Add the Firebase products that you want to use
require("firebase/auth");

// TODO: Replace the following with your app's Firebase project configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { firebase };

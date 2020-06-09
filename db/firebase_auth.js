// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase";
import "firebase/firestore";

import firebaseConfig from "../config/firebase_keys";

// Add the Firebase products that you want to use

// TODO: Replace the following with your app's Firebase project configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { firebase };

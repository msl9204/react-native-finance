// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "../config/firebase_keys";

// Add the Firebase products that you want to use

// TODO: Replace the following with your app's Firebase project configuration

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

const firebase_auth = app.auth();
const firestore_db = app.firestore();
const firebase_storage = app.storage();

module.exports = { firebase_auth, firestore_db, firebase_storage };

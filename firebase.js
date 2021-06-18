import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAx0HayJJm7qkDNKwB-682OnZrA-k2r93E",
    authDomain: "amzn-2-c3107.firebaseapp.com",
    projectId: "amzn-2-c3107",
    storageBucket: "amzn-2-c3107.appspot.com",
    messagingSenderId: "998951684801",
    appId: "1:998951684801:web:1dcb2bed901c8693576240"
};

const app =  !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
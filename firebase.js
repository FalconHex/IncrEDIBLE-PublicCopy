import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzbjM3D57LlCrP-gyOHBkR_WU4l3oagNY",
  authDomain: "incredible-52fa3.firebaseapp.com",
  projectId: "incredible-52fa3",
  storageBucket: "incredible-52fa3.appspot.com",
  messagingSenderId: "536401488936",
  appId: "1:536401488936:web:99650679dc8a73235d191d"
};

const app =  !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
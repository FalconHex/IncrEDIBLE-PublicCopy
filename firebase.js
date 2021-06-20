import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx1WZhejJjpP7h4qSsGMWI_Urt4oasWVE",
  authDomain: "clone-a4923.firebaseapp.com",
  projectId: "clone-a4923",
  storageBucket: "clone-a4923.appspot.com",
  messagingSenderId: "901636445650",
  appId: "1:901636445650:web:1e48a169bb881f5008640b"
};

const app =  !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
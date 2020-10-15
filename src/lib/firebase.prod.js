import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBs6gIby_EfivUAN5QMwtBtj7Vh8Z-6b7Y",
    authDomain: "netflix-4c27d.firebaseapp.com",
    databaseURL: "https://netflix-4c27d.firebaseio.com",
    projectId: "netflix-4c27d",
    storageBucket: "netflix-4c27d.appspot.com",
    messagingSenderId: "25577254762",
    appId: "1:25577254762:web:39d62f957564d92f89bf13"
};

const firebase = Firebase.initializeApp(config);



export { firebase };

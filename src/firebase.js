import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3cDxMV44yJmk-i8ApeM4m89nXGhZ_YT4",
    authDomain: "e-commerce-26858.firebaseapp.com",
    databaseURL: "https://e-commerce-26858.firebaseio.com",
    projectId: "e-commerce-26858",
    storageBucket: "e-commerce-26858.appspot.com",
    messagingSenderId: "980947460816",
    appId: "1:980947460816:web:39909b0b48b0f11b8574d5",
    measurementId: "G-DMRRECHHPV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
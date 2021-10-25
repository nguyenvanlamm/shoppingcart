import { firebase } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRztor8CFWGqNRXFrX0QAQu5UzmumCEtM",
    authDomain: "shoppingcart-5daa4.firebaseapp.com",
    databaseURL: "https://shoppingcart-5daa4-default-rtdb.firebaseio.com",
    projectId: "shoppingcart-5daa4",
    storageBucket: "shoppingcart-5daa4.appspot.com",
    messagingSenderId: "1044012932834",
    appId: "1:1044012932834:web:38276540c0254ba18b08bb",
    measurementId: "G-3KG3S3BNE7"
};

const app = firebase.initializeApp(firebaseConfig);
const fireStoreCore = app.firestore();

export {fireStoreCore}



import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCg9G_VpCdNGhU9xkVeZvsWbbmZZYzB9Uc",
    authDomain: "vue-ecommerce-4806a.firebaseapp.com",
    databaseURL: "https://vue-ecommerce-4806a.firebaseio.com",
    projectId: "vue-ecommerce-4806a",
    storageBucket: "vue-ecommerce-4806a.appspot.com",
    messagingSenderId: "16851983258",
    appId: "1:16851983258:web:3974f525b070bb838ff823",
    measurementId: "G-VW3L4EXZQR"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);

  firebase.analytics();











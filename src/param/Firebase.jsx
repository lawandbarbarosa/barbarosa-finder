import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
   apiKey: "AIzaSyDdltZat-U7cxgC8-eA-IaL0eO4udLMxTU",
   authDomain: "barbarosa-find.firebaseapp.com",
   projectId: "barbarosa-find",
   storageBucket: "barbarosa-find.appspot.com",
   messagingSenderId: "442962767440",
   appId: "1:442962767440:web:68b6f91d59c9d30e162b55",
   measurementId: "G-759M18SBNH"
 };


 
let app;

// Initialize Firebase
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export {auth};










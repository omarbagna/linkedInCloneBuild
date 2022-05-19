import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiSxBJsYHF-Z0rgVIkllF2VGl07sGIdLc",
    authDomain: "linkedin-fa1d6.firebaseapp.com",
    projectId: "linkedin-fa1d6",
    storageBucket: "linkedin-fa1d6.appspot.com",
    messagingSenderId: "451937374462",
    appId: "1:451937374462:web:6c7c1c99d5443e80cdd5af"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
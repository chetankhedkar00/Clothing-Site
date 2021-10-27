import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDLcMul5ZxGh_KECzOBfzS6bCNgOUlSmd4",
    authDomain: "ecommerce-site-83d36.firebaseapp.com",
    projectId: "ecommerce-site-83d36",
    storageBucket: "ecommerce-site-83d36.appspot.com",
    messagingSenderId: "433310451482",
    appId: "1:433310451482:web:3f1b6dfa44ba1297624ea3",
    measurementId: "G-4VCXWMKH3E"
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
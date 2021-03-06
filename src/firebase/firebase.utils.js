//firebase keyword gives us access to base
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoz4W178YmjspvlC70mMPvy__RShgke34",
    authDomain: "crwndb-947dd.firebaseapp.com",
    projectId: "crwndb-947dd",
    storageBucket: "crwndb-947dd.appspot.com",
    messagingSenderId: "718890844110",
    appId: "1:718890844110:web:f0c18b8fa0b96cfa17f59f"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
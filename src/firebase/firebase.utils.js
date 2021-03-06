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


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //crud methods .set(), .get(), .update(), .delete()
    if(!snapShot.exits){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      //add data to store database based off
      //our userAuth object :)
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  

  export default firebase;
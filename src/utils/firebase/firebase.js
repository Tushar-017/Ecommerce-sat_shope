import { initializeApp } from "firebase/app";
import { getFirestore /*,collection, getDocs */} from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlNkW13osOqq0GQINesGiAej0cBeb1_s8",
  authDomain: "satshop-db.firebaseapp.com",
  projectId: "satshop-db",
  storageBucket: "satshop-db.appspot.com",
  messagingSenderId: "339900947295",
  appId: "1:339900947295:web:91c32dd7cc3b49799d74ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select account'});

export const signInWithGoogle = () => {
  signInWithPopup(auth,provider)
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
}

// export default firebase;
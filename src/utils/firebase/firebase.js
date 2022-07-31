import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc ,setDoc } from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlNkW13osOqq0GQINesGiAej0cBeb1_s8",
  authDomain: "satshop-db.firebaseapp.com",
  projectId: "satshop-db",
  storageBucket: "satshop-db.appspot.com",
  messagingSenderId: "339900947295",
  appId: "1:339900947295:web:91c32dd7cc3b49799d74ea"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createAt =  new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
          ...additionalInfo
        });
      } catch (error) {
        console.log('error creating the user', error.message)
      }
    }

  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password ) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password ) return;

  return await signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
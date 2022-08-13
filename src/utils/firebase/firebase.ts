import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  getDoc,
  setDoc, 
  collection, 
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import { Category } from "../../store/category/category.types";

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string, 
  objectsToAdd: T[]
  ): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object);
  });

  await batch.commit();
  console.log('done');
}


export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(
    (docSnapShot) => docSnapShot.data() as Category
    );
};

export type AdditionalInformation = {
  displayName? : string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
  userAuth: User, 
  additionalInfo = {} as AdditionalInformation
  ): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
        console.log('error creating the user', error);
      }
    }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if(!email || !password ) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string,password: string) => {
  if(!email || !password ) return;

  return await signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
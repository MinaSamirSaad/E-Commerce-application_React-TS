import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";
const firebaseConfig = {
  apiKey: "AIzaSyCYHF2v6fR5d7ZzbEHseLBQMb7oFqQkroo",
  authDomain: "e-commerce-app-dc8e6.firebaseapp.com",
  projectId: "e-commerce-app-dc8e6",
  storageBucket: "e-commerce-app-dc8e6.appspot.com",
  messagingSenderId: "870559165242",
  appId: "1:870559165242:web:11aed78ba1db66392a3e03",
  measurementId: "G-MVN3GB7KG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export type objectsToAdd ={
  title:string
}

export const addCollectionAndDocuments = async <T extends objectsToAdd>(
  collectionKey:string,
  objectsToAdd:T[]
):Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title);
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCollectionAndDocuments = async ():Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};

export type AdditionalInformation ={
  displayName?:string
}
export type UserData = {
  createdAt:Date,
  displayName:string,
  email:string
}
export const creatUserDocumentFromAuth = async (
  userAuth:User,
  additionalInformation = {} as AdditionalInformation
):Promise<void|QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data doesn,t exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // if user data existed
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListiners = (callBack: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callBack);
};

export const getCurrentUser = ():Promise<User|null> => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
      unSubscribe();
      resolve(userAuth);
    },
    reject);
  });
};

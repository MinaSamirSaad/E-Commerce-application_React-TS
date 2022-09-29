import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCYHF2v6fR5d7ZzbEHseLBQMb7oFqQkroo",
    authDomain: "e-commerce-app-dc8e6.firebaseapp.com",
    projectId: "e-commerce-app-dc8e6",
    storageBucket: "e-commerce-app-dc8e6.appspot.com",
    messagingSenderId: "870559165242",
    appId: "1:870559165242:web:11aed78ba1db66392a3e03",
    measurementId: "G-MVN3GB7KG1"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopUp =()=> signInWithPopup(auth,provider);
export const db = getFirestore();

export const creatUserDocumentFromAuth=async(userAuth)=>{
  const userDocRef = doc(db,"users",userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists()); 

  // if user data doesn,t exist
    if(!userSnapshot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef,{
          displayName,email,createdAt
        })
      }catch(err){
        console.log(err.message)
      }
    }
  // if user data existed
    return userDocRef
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getDatabase,
    onValue,
    ref,
    update,
    connectDatabaseEmulator,
  } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    connectAuthEmulator,
    signInWithCredential,
    signInWithRedirect,
    onAuthStateChanged,
  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtA2416KPgimj-kMITF7NXXR9GaZSRpbU",
  authDomain: "react-tutorial-1b946.firebaseapp.com",
  projectId: "react-tutorial-1b946",
  databaseURL: "http://127.0.0.1:9000/?ns=react-tutorial-2023",
  storageBucket: "react-tutorial-1b946.appspot.com",
  messagingSenderId: "194434498584",
  appId: "1:194434498584:web:2d90ab2831542029b4036d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

if (!globalThis.EMULATION && import.meta.env.MODE === 'development') {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

signInWithCredential(auth, GoogleAuthProvider.credential(
  '{"sub": "i0RiXDLIWCwF8OIC4LVtB9AOz0qi", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
));

// set flag to avoid connecting twice, e.g., because of an editor hot-reload
globalThis.EMULATION = true;
}



export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};


export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};


export const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };
  
  const firebaseSignOut = () => signOut(auth);
  
  export { firebaseSignOut as signOut };
  
  export const useAuthState = () => {
    const [user, setUser] = useState();
    
    useEffect(() => (
      onAuthStateChanged(auth, setUser)
    ), []);
  
    return [user];
  };
  
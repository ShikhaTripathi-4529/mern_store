import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // ✅ Use full Firestore SDK (not 'lite')
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZGqPzxuBqkRi8CtxfOP_wktZct4WS6M8",
    authDomain: "linkedin-clone-b7fda.firebaseapp.com",
    projectId: "linkedin-clone-b7fda",
    storageBucket: "linkedin-clone-b7fda.appspot.com", // ✅ Corrected storageBucket
    messagingSenderId: "667118273715",
    appId: "1:667118273715:web:9c0c13ac0ec8af786b9cc6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth ,signInWithEmailAndPassword };

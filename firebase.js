import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg92NtdOa9peMIvNSRMUyMK8JLA-i4x_8",
  authDomain: "foodapp-a3f3c.firebaseapp.com",
  projectId: "foodapp-a3f3c",
  storageBucket: "foodapp-a3f3c.appspot.com",
  messagingSenderId: "221483426961",
  appId: "1:221483426961:web:7fd53c3b9314bdd9c20b30",
  measurementId: "G-ZEKMKJQT5D",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

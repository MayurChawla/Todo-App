import firebase from "firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
//firebase.initializeApp(firebaseConfigkeys);

const db = firebase.firestore();
export { db };

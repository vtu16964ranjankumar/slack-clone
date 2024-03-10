import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdz4L654YF825VWxt0EsqBOt-8NoYqW90",
  authDomain: "slack-clone-f7a67.firebaseapp.com",
  projectId: "slack-clone-f7a67",
  storageBucket: "slack-clone-f7a67.appspot.com",
  messagingSenderId: "790317291117",
  appId: "1:790317291117:web:6d7c3b4525804c08e31164",
  measurementId: "G-2R2XJ04YS8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

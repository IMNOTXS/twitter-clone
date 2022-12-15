import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBk6liBBpLxbATG6RWp0Uv4I8r69gBj8oA",
  authDomain: "twitter-clone-708c0.firebaseapp.com",
  projectId: "twitter-clone-708c0",
  storageBucket: "twitter-clone-708c0.appspot.com",
  messagingSenderId: "155104359263",
  appId: "1:155104359263:web:0a228f8129d3d784ad3cea",
  measurementId: "G-FX3M31Q0LG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export default db;
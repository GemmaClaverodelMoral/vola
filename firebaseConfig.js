import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwnwpNOfJu7yxpCeVheY5XjPVwmWE3_S4",
  authDomain: "voladatabase.firebaseapp.com",
  projectId: "voladatabase",
  storageBucket: "voladatabase.appspot.com",
  messagingSenderId: "1074992415232",
  appId: "1:1074992415232:web:1f022eafb8901a4e8d0ee5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

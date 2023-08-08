// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLdRgLQPw6zZYGwZBL9_bpgASrOQNenPY",
  authDomain: "hn-ptonjs230406.firebaseapp.com",
  projectId: "hn-ptonjs230406",
  storageBucket: "hn-ptonjs230406.appspot.com",
  messagingSenderId: "918783822495",
  appId: "1:918783822495:web:ceefe3c1d5c6e9fcdbb0aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init storage
export const storage = getStorage(app);
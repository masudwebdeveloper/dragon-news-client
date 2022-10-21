// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEbJz2aVTdnJOOk8NjFKpDw9MwDShclOM",
  authDomain: "dragon-news-d408d.firebaseapp.com",
  projectId: "dragon-news-d408d",
  storageBucket: "dragon-news-d408d.appspot.com",
  messagingSenderId: "730922672639",
  appId: "1:730922672639:web:bbe689decde01c592287ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
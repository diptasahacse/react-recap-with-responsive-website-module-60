// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_AM0DRr9F8WPTGUTBX5CiTQ52nvri5U",
  authDomain: "responsive-with-firebase-recap.firebaseapp.com",
  projectId: "responsive-with-firebase-recap",
  storageBucket: "responsive-with-firebase-recap.appspot.com",
  messagingSenderId: "860479007439",
  appId: "1:860479007439:web:8cc8a194118fb4bbaf65ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1XCUBXWjBb2ozol2lj6hV4kiPTcIYMEw",
  authDomain: "chef-hunter-client-1f3c8.firebaseapp.com",
  projectId: "chef-hunter-client-1f3c8",
  storageBucket: "chef-hunter-client-1f3c8.appspot.com",
  messagingSenderId: "721728566109",
  appId: "1:721728566109:web:9f480cedb1c06a24efaeb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
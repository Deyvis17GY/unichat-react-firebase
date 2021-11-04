import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyA1GRgKFYB5wHdTYs3LQ8NohGCecrsRyWk",
    authDomain: "unichat-4b23b.firebaseapp.com",
    projectId: "unichat-4b23b",
    storageBucket: "unichat-4b23b.appspot.com",
    messagingSenderId: "130891802696",
    appId: "1:130891802696:web:a63a0353fcc4f7868b507d",
  })
  .auth();

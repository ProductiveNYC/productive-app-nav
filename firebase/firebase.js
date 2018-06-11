import * as firebase from 'firebase';


//authentication info
const config = {
  apiKey: "AIzaSyBd89lJj1-FlNHFjH0fbb1jl8mIqfDKs-c",
  authDomain: "productivenyc-d8d57.firebaseapp.com",
  databaseURL: "https://productivenyc-d8d57.firebaseio.com",
  projectId: "productivenyc-d8d57",
  storageBucket: "productivenyc-d8d57.appspot.com",
  messagingSenderId: "425924660002"
};

//reference to firebase database

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();


export {
  db,
  auth
};

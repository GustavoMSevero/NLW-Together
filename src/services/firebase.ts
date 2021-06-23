import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyCfMMAStybQ0KU2aEQo-ukB2F-gyoD72zo",
  authDomain: "letmeask-bb3b2.firebaseapp.com",
  databaseURL: "https://letmeask-bb3b2-default-rtdb.firebaseio.com",
  projectId: "letmeask-bb3b2",
  storageBucket: "letmeask-bb3b2.appspot.com",
  messagingSenderId: "918001515672",
  appId: "1:918001515672:web:1aee17460a34c515b4a4ed"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBvcGnnxICNrZC77afOtX0xhwlQlyN2Xpk",
    authDomain: "miu-firegram.firebaseapp.com",
    databaseURL: "https://miu-firegram.firebaseio.com",
    projectId: "miu-firegram",
    storageBucket: "miu-firegram.appspot.com",
    messagingSenderId: "810144128661",
    appId: "1:810144128661:web:a44df11978fa4e346a859c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};
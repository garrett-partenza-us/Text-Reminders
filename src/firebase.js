import firebase from 'firebase'
import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDIrO_5RdCui4i29SO89txMtcDaSTqbRYc",
    authDomain: "text-based-reminders-project.firebaseapp.com",
    databaseURL: "https://text-based-reminders-project.firebaseio.com",
    projectId: "text-based-reminders-project",
    storageBucket: "text-based-reminders-project.appspot.com",
    messagingSenderId: "144911160806",
    appId: "1:144911160806:web:e16c0ae8eda291b50af227",
    measurementId: "G-0CMZLF4VG3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAuXF27E_tbJVBllIv7yQX8f2J0bR1cpbo",
    authDomain: "karlamaemagloyuan-b7c06.firebaseapp.com",
    projectId: "karlamaemagloyuan-b7c06",
    storageBucket: "karlamaemagloyuan-b7c06.appspot.com",
    messagingSenderId: "545104396303",
    appId: "1:545104396303:web:7c0060f5a3a5b436ec237a"
  };

  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
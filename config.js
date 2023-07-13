import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCS0eUKlXdwr45gNSXrCFNGaCiep5-aZbY",
  authDomain: "app-b2f4a.firebaseapp.com",
  databaseURL: "https://app-b2f4a-default-rtdb.firebaseio.com",
  projectId: "app-b2f4a",
  storageBucket: "app-b2f4a.appspot.com",
  messagingSenderId: "460944866228",
  appId: "1:460944866228:web:c3cb363c343b51e74ed0e1"
}

 firebase.initializeApp(firebaseConfig);
export default firebase.database();
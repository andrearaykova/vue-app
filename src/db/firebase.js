
import Firebase from "firebase";
import "firebase/firestore";

export const config = {
  apiKey: "AIzaSyBgvBRq1k7W-BO4otglv77sl9YSt0XUCKg",
  authDomain: "vue-app-162e6.firebaseapp.com",
  databaseURL: "https://vue-app-162e6.firebaseio.com",
  projectId: "vue-app-162e6",
  storageBucket: "vue-app-162e6.appspot.com",
  messagingSenderId: "541098740344",
  appId: "1:541098740344:web:d25502e1e37c99e18b3b8d",
};

Firebase.initializeApp(config);
// export const auth = Firebase.auth();

export default Firebase.firestore();

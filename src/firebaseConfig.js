import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAJHd-auSsC5hvAl_BO8aSa-Pr1YQr_C4",
  authDomain: "vue-3-2023-9202d.firebaseapp.com",
  projectId: "vue-3-2023-9202d",
  storageBucket: "vue-3-2023-9202d.appspot.com",
  messagingSenderId: "637151803247",
  appId: "1:637151803247:web:3c885cbb915a593b86da9a",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };

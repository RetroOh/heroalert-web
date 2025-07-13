import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVoU-EhxCLHbS8WTkPYuRwn5gbNE_WYZM",
  authDomain: "heroalert-app.firebaseapp.com",
  projectId: "heroalert-app",
  storageBucket: "heroalert-app.appspot.com",
  messagingSenderId: "24019246951",
  appId: "1:24019246951:web:7e251e63a15b529b0de55d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app };

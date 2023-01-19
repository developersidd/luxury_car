import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseInit = () => {
    return initializeApp(firebaseConfig);
}

export default firebaseInit

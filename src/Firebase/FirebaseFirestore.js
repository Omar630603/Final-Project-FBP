import {firebaseapp} from "./FirebaseInitialize";
import {getFirestore} from "firebase/firestore";

const db=getFirestore(firebaseapp);

export default db;



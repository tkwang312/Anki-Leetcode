import { getFirestore, addDoc, collection, getDocs, query, where, QueryConstraint, data, QuerySnapshot} from "firebase/firestore";
import grind75dataset from './Grind75.json'
import neetcode150dataset from './Neetcode150.json'
import { auth } from './firebase';


export const db = getFirestore();

export const setNewUserDefaultInfo = (email) =>{
  const grind75_data = {
    email: email,
    data: grind75dataset
  }
  const neetcode150_data = {
    email: email,
    data: neetcode150dataset
  }

  addDoc(collection(db, "Grind75"), grind75_data)
  addDoc(collection(db, "Neetcode150"), neetcode150_data)
}

import { getFirestore, addDoc, collection, getDocs, query, where, QueryConstraint, data, QuerySnapshot} from "firebase/firestore";
import grind75dataset from './Grind75.json'
import { auth } from './firebase';


export const db = getFirestore();

export const setNewUserDefaultInfo = (auth, listName) =>{
  const d = {
    email: auth.currentUser.email,
    data: grind75dataset
  }
  addDoc(collection(db, listName), d)
}

export const checkExist = (auth, listName) => {
  const q = query(collection(db, listName), where('email', '==', auth.currentUser.email));
  getDocs(q).then((docSnapshot) => {
    if(docSnapshot.size === 0) {
      return false
    } else {
      return true
    }

  })
}




// export async function checkExist(){
//   const ref = collection(db, 'Grind75')
//   const doc = await ref.get()
//   if (!doc.exists)
// }


// getDocs(q).then(function(querySnapshot){
//   console.log(querySnapshot)
//   if(querySnapshot){
//     return true
//   } else {
//     return false
//   }
// })



// export const doCreateNewUserData = () => {
//   db.collection('users').doc('id').get()
//   .then((docSnapshot) => {
//     if (docSnapshot.exists) {
//       db.collection('users').doc('id')
//         .onSnapshot((doc) => {
//           // do stuff with the data
//         });
//     }
//   });
// }
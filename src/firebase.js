import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore'
 


const firebaseConfig = {
  apiKey: "AIzaSyBTAC0GZJ4KvwOhnnSg2KA-1OpvzwO2BHU",
  authDomain: "smile-1a9ba.firebaseapp.com",
  projectId: "smile-1a9ba",
  storageBucket: "smile-1a9ba.appspot.com",
  messagingSenderId: "358221204636",
  appId: "1:358221204636:web:8bf46ebb96a61b5f29b159"
};

// init firebase app
const fireApp = initializeApp(firebaseConfig);

// init services
export const db = getFirestore();

// init auth
export const auth = getAuth(fireApp);

//collection ref
export const colRef = collection(db, 'CollectionName');

// get collection data
getDocs(colRef)
    .then((snapshot) => {
        let CollectionName = []
        snapshot.docs.forEach((doc) => {
            CollectionName.push({...doc.data(), id: doc.id})
        })
        console.log('CollectionName');
    })
    .catch(err => {
      console.log(err.message);
    })


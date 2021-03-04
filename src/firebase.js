import firebase from 'firebase';	

const firebaseConfig = {	
 apiKey: "AIzaSyC2RploFL3TVfqU7nJyvN-gpuJRFlMA9KI",
    authDomain: "cloudfoxsuit.firebaseapp.com",
    projectId: "cloudfoxsuit",
    storageBucket: "cloudfoxsuit.appspot.com",
    messagingSenderId: "576736045262",
    appId: "1:576736045262:web:c70e35336faeace0c2889f"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDthLeEV97Gwqn4vWKjaDvFCT6LdN8uuDA",
    authDomain: "ecomercewebsite-b382b.firebaseapp.com",
    databaseURL: "https://ecomercewebsite-b382b.firebaseio.com",
    projectId: "ecomercewebsite-b382b",
    storageBucket: "ecomercewebsite-b382b.appspot.com",
    messagingSenderId: "1040923110608",
    appId: "1:1040923110608:web:1cb05a37a60cf26621c2d5",
    measurementId: "G-PKJTTGL4PE"
};
firebase.initializeApp(config);


export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
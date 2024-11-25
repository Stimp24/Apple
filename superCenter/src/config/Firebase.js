import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase

var dev = {
	apiKey: 'AIzaSyCBQDSquKwm0nZJqHoUzr57-4QkvUWXaKo',
	authDomain: 'messaging-app-93c7b.firebaseapp.com',
	databaseURL: 'https://messaging-app-93c7b.firebaseio.com',
	projectId: 'messaging-app-93c7b',
	storageBucket: 'messaging-app-93c7b.appspot.com',
	messagingSenderId: '71275684215',
	appId: '1:71275684215:web:0de5fa73401f5e4e810172',
};
firebase.initializeApp(dev);

export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
export const db = getFirestore();
export default firebase;

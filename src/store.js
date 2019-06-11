import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

// config firestore

const firebaseConfig = {
    apiKey: "AIzaSyAmh3uhP3TJCE-YE3h1IUGODnpYVV2SCkI",
    authDomain: "bibliostore-bfd63.firebaseapp.com",
    databaseURL: "https://bibliostore-bfd63.firebaseio.com",
    projectId: "bibliostore-bfd63",
    storageBucket: "bibliostore-bfd63.appspot.com",
    messagingSenderId: "688553362735",
    appId: "1:688553362735:web:53f5ca3ebaaeaa91"
}

//init firebase

firebase.initializeApp(firebaseConfig);

//config react-redux

const rrfConfig = {
    userProfile: 'user',
    useFirestoreForProfile: true
}

//crear el enhacer con compose de redux y firestore

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

//reducers

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

//state inicial
const initialState = {};

//create el store

const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
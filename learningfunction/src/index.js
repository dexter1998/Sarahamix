import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase'
import App from './App';
import * as serviceWorker from './serviceWorker';
var firebaseConfig = {
    apiKey: "AIzaSyCy3FCGIeap4mkO7S5TycZdq1f_fUqDT24",
    authDomain: "sarahahmix.firebaseapp.com",
    databaseURL: "https://sarahahmix.firebaseio.com",
    projectId: "sarahahmix",
    storageBucket: "",
    messagingSenderId: "282443677209",
    appId: "1:282443677209:web:bae0a577a5ca9719"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import firebase from 'firebase';

try {
// Initialize Firebase
    let config = {
        apiKey: "AIzaSyDIp4XwHAWDBj13gLPyzAIl2d2UDjqXpc4",
        authDomain: "greco-task-tracker.firebaseapp.com",
        databaseURL: "https://greco-task-tracker.firebaseio.com",
        storageBucket: "greco-task-tracker.appspot.com",
        messagingSenderId: "207043300616"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.error('Unable to init db.');
}

export let firebaseReference = firebase.database().ref();
export default firebase;
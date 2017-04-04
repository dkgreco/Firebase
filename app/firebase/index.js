import firebase from 'firebase';

try {
// Initialize Firebase
    let config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DB_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.SENDER_ID
    };
    firebase.initializeApp(config);
} catch (e) {
    console.error('Unable to init db.');
}

export let firebaseReference = firebase.database().ref();
export default firebase;
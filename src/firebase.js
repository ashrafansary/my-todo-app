import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpn9H5dQSMa7xZDVTzXS0V8xQwS3jwqTs",
  authDomain: "todo-again-21e27.firebaseapp.com",
  projectId: "todo-again-21e27",
  storageBucket: "todo-again-21e27.appspot.com",
  messagingSenderId: "470127094931",
  appId: "1:470127094931:web:6198d1cc65726e4085f166",
  measurementId: "G-6G6V57ZSZZ"
})

const db = firebaseApp.firestore();

export default db;
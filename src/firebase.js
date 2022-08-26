// const firebaseConfig = {
//     apiKey: "AIzaSyCH9tZTmAhNmMs1_QbVKAO4JTu1ksjC7MI",
//     authDomain: "todo-app-30495.firebaseapp.com",
//     databaseURL: "https://todo-app-30495.firebaseio.com",
//     projectId: "todo-app-30495",
//     storageBucket: "todo-app-30495.appspot.com",
//     messagingSenderId: "559639778604",
//     appId: "1:559639778604:web:7bcbec5c1c0f41ed870889",
//     measurementId: "G-2EPRGB3YM3"
//   };

  import firebase from 'firebase'

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4U4CN1BHByOajejkvxLjGmbL7rSzYcfg",
  authDomain: "shellcode-9fa78.firebaseapp.com",
  projectId: "shellcode-9fa78",
  storageBucket: "shellcode-9fa78.appspot.com",
  messagingSenderId: "372248540792",
  appId: "1:372248540792:web:d2c6282e77e58c60149f8d",
  measurementId: "G-K4ZMPJWR2Y"
  })

  const db = firebaseApp.firestore();

  export default db ;

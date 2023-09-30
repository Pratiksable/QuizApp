import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaAy2B4X9IfPk3g-c13NXV2FVcR4xoJ5s",
  authDomain: "quiz-fab23.firebaseapp.com",
  projectId: "quiz-fab23",
  storageBucket: "quiz-fab23.appspot.com",
  messagingSenderId: "635878352245",
  appId: "1:635878352245:web:7ee2cdeda769c039cf1f3c",
  measurementId: "G-VNGTC4679Q"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export{firebase};
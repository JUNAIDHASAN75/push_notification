# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React With Firebase

   - go to [react router tutorial](https://reactrouter.com/en/main/start/tutorial)
     here is the example how to run react js


- 1st create a project firebase and set the firebasae config file.
  const firebaseConfig = {
  apiKey: "AIzaSyDy8eQgbvmrXs955Z08WfILj40FeKyb3Mo",
  authDomain: "pushnotifications-bc8e4.firebaseapp.com",
  projectId: "pushnotifications-bc8e4",
  storageBucket: "pushnotifications-bc8e4.appspot.com",
  messagingSenderId: "366690958417",
  appId: "1:366690958417:web:f5a0925a2f76ba7f6bcc70",
  measurementId: "G-JX5SX3B3KS",
  };
  this config file location src/notifications/firebase.js

 - 2nd go to public/firebase-messaging-sw.js
 change only your 
 {
  apiKey: "AIzaSyDy8eQgbvmrXs955Z08WfILj40FeKyb3Mo",
  authDomain: "pushnotifications-bc8e4.firebaseapp.com",
  projectId: "pushnotifications-bc8e4",
  storageBucket: "pushnotifications-bc8e4.appspot.com",
  messagingSenderId: "366690958417",
  appId: "1:366690958417:web:f5a0925a2f76ba7f6bcc70",
  measurementId: "G-JX5SX3B3KS",
  }
  this object


  




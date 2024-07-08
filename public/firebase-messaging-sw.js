import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
   apiKey: "AIzaSyDy8eQgbvmrXs955Z08WfILj40FeKyb3Mo",
  authDomain: "pushnotifications-bc8e4.firebaseapp.com",
  projectId: "pushnotifications-bc8e4",
  storageBucket: "pushnotifications-bc8e4.appspot.com",
  messagingSenderId: "366690958417",
  appId: "1:366690958417:web:f5a0925a2f76ba7f6bcc70",
  measurementId: "G-JX5SX3B3KS",
});

const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// src/notifications/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDy8eQgbvmrXs955Z08WfILj40FeKyb3Mo",
  authDomain: "pushnotifications-bc8e4.firebaseapp.com",
  projectId: "pushnotifications-bc8e4",
  storageBucket: "pushnotifications-bc8e4.appspot.com",
  messagingSenderId: "366690958417",
  appId: "1:366690958417:web:f5a0925a2f76ba7f6bcc70",
  measurementId: "G-JX5SX3B3KS",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: '"BLna3OmLmcZlzhQG_5nibZl9rK79qgYM0aWYuJmeP-LCh3twIbyRmi0FsisluyjTCGJHnjDuKxrw6SPNBStj6Fk"', serviceWorkerRegistration: await navigator.serviceWorker.register('/firebase-messaging-sw.js') });
    if (currentToken) {
      console.log('FCM token:', currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
};

// Function to handle foreground messages
onMessage(messaging, (payload) => {
  console.log('Message received in foreground: ', payload);
  // Customize notification here if needed
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  if (Notification.permission === 'granted') {
    new Notification(notificationTitle, notificationOptions);
  }
});

export { messaging };

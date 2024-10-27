// public/firebase-messaging-sw.js
// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA3qRnZT8QO_thE7akzQEIaNHpQo84SftM",
  authDomain: "notifications-66468.firebaseapp.com",
  projectId: "notifications-66468",
  storageBucket: "notifications-66468.appspot.com",
  messagingSenderId: "505043596220",
  appId: "1:505043596220:web:899d45282361372f70f1b9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification?.title || 'Notification';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new message.',
    icon: payload.notification?.image || '/default-icon.png', // Replace with your default icon path
    data: payload.data // Additional data to pass along
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
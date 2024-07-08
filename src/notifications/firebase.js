// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDy8eQgbvmrXs955Z08WfILj40FeKyb3Mo",
  authDomain: "pushnotifications-bc8e4.firebaseapp.com",
  projectId: "pushnotifications-bc8e4",
  storageBucket: "pushnotifications-bc8e4.appspot.com",
  messagingSenderId: "366690958417",
  appId: "1:366690958417:web:f5a0925a2f76ba7f6bcc70",
  measurementId: "G-JX5SX3B3KS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

//  notification permission method for web message
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BLna3OmLmcZlzhQG_5nibZl9rK79qgYM0aWYuJmeP-LCh3twIbyRmi0FsisluyjTCGJHnjDuKxrw6SPNBStj6Fk",
    });
    console.log(token);
  }
};

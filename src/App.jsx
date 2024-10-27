// App.js (frontend)
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [clickAction, setClickAction] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Initialize Firebase app
    const firebaseConfig = {
      // Replace with your Firebase config from Firebase Console
      apiKey: "AIzaSyDy8eQgbvmrXs955Z08WfILj40FeKyb3Mo",
      authDomain: "pushnotifications-bc8e4.firebaseapp.com",
      projectId: "pushnotifications-bc8e4",
      storageBucket: "pushnotifications-bc8e4.appspot.com",
      messagingSenderId: "366690958417",
      appId: "1:366690958417:web:f5a0925a2f76ba7f6bcc70",
      measurementId: "G-JX5SX3B3KS",
    };
    initializeApp(firebaseConfig);

    // Obtain FCM token
    const messaging = getMessaging();
    getToken(messaging)
      .then((currentToken) => {
        if (currentToken) {
          console.log('FCM Token:', currentToken);
          setToken(currentToken); // Set token state for use in sendNotification function
        } else {
          console.log('No registration token available.');
        }
      })
      .catch((error) => {
        console.error('Error obtaining FCM token:', error);
      });

  }, []);

  const sendNotification = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send_notification', {
        title: title,
        body: body,
        clickAction: clickAction,
        token: token, // Send the token to the backend
      });
      console.log('Notification sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <div className="App">
      <h1>Send Notification</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="text"
        placeholder="Click Action URL"
        value={clickAction}
        onChange={(e) => setClickAction(e.target.value)}
      />
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
}

export default App;

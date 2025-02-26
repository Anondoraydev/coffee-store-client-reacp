// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDu69wbxRGMW0OkUgKGvasfDyhbHGeUlWQ',
  authDomain: 'coffee-store-bf39d.firebaseapp.com',
  projectId: 'coffee-store-bf39d',
  storageBucket: 'coffee-store-bf39d.firebasestorage.app',
  messagingSenderId: '729931946097',
  appId: '1:729931946097:web:43f44b7245dae085b823d0',
  measurementId: 'G-5HP5W756HC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
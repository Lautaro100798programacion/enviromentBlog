import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCCR0zmL_rtWOvnxfAIs0R1BkeRRarhcVg',
  authDomain: 'green-2ae92.firebaseapp.com',
  projectId: 'green-2ae92',
  storageBucket: 'green-2ae92.appspot.com',
  messagingSenderId: '4061213928583',
  appId: '1:406121392858:web:132364abea4430d16993e3',
  measurementId: 'G-WCLSW5RM6Z'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app } ;
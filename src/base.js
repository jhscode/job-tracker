import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDApiA_RAvfv72J_-_IgeuHuTG7CH-4rNY',
  authDomain: 'job-tracker-e27df.firebaseapp.com',
  databaseURL: 'https://job-tracker-e27df.firebaseio.com'
});

export { firebaseApp };

export default base;

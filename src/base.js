import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDApiA_RAvfv72J_-_IgeuHuTG7CH-4rNY',
  authDomain: 'job-tracker-e27df.firebaseapp.com',
  databaseURL: 'https://job-tracker-e27df.firebaseio.com',
  projectId: 'job-tracker-e27df',
  storageBucket: 'job-tracker-e27df.appspot.com',
  messagingSenderId: '388808303249'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

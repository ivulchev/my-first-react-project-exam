import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

let firebaseConfig = {
    apiKey: "AIzaSyCHYzaKFP5FJLb0FSQK_HR-HJUbnfe-0zw",
    authDomain: "your-project-name.firebaseapp.com",
    projectId: "your-project-name"
  };
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();



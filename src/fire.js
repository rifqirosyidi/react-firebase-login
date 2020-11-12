import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgNQbenhLNak2HCnYPSWipGLJdMuNQTrY",
    authDomain: "reactfirebaselogin-6d9d3.firebaseapp.com",
    databaseURL: "https://reactfirebaselogin-6d9d3.firebaseio.com",
    projectId: "reactfirebaselogin-6d9d3",
    storageBucket: "reactfirebaselogin-6d9d3.appspot.com",
    messagingSenderId: "36981581825",
    appId: "1:36981581825:web:54c4f10ec6e0d29e7e3800"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire
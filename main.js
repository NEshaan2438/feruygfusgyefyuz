var firebaseConfig = {
    apiKey: "AIzaSyDdyrKS8ViQMKUYXp3VnaPDL1Op9FZrXWA",
    authDomain: "letschat-89647.firebaseapp.com",
    databaseURL: "https://letschat-89647-default-rtdb.firebaseio.com",
    projectId: "letschat-89647",
    storageBucket: "letschat-89647.appspot.com",
    messagingSenderId: "388228029988",
    appId: "1:388228029988:web:03f071e5751fc5b2f882b1"
};

firebase.initializeApp(firebaseConfig);

var hi = 'Hello there.';
var Hi = 'Hello there.';
var HI = 'Hello there.';
var hello = 'Hello there.';
var Hello = 'Hello there.';
var HELLO = 'Hello there.';
var hallo = 'Hallo there.';
var Hallo = 'Hallo there.';
var HALLO = 'Hallo there.';

function moveOn() {
    username = document.getElementById("login1").value;
    localStorage.setItem("username_letschat", username);
    window.location = "room.html";
}

function goback() {
    window.location = "room.html";
}
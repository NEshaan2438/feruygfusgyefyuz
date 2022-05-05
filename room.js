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

console.log("hi... i guess");

username = localStorage.getItem("username_letschat");
document.getElementById("welcome").innerHTML = "Hello, " + username  + "!";

function addRoom() {
    room = document.getElementById("roomName").value;
    localStorage.setItem("room", room);
    window.location = "inroom.html";
}

function redirect(room_name) {
    roomname = room_name;
    document.getElementById("roomName").value = roomname;
    addRoom();
}
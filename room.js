username = localStorage.getItem("username_letschat");
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

document.getElementById("welcome").innerHTML = "Hello, " + username  + "!";

function addRoom() {
    room = document.getElementById("roomName").value;
    localStorage.setItem("room", room);
    window.location = "inroom.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
    Room_names = childKey;
    //stert
    document.getElementById("rooms").innerHTML += "<h3 class='roomNameThing' id=" + Room_names + " onclick='redirect(this.id)'>" + Room_names + "</h3> <hr>";
    //eenb
});});}

getData();

function redirect(room_name) {
    roomname = room_name;
    document.getElementById("roomName").value = roomname;
    addRoom();
}
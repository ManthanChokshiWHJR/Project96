//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBkgoFtoYnJ34I8UkMZS0Y8-bpb3SV3Ejc",
    authDomain: "lets-chat-web-app-843f6.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-843f6-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-843f6",
    storageBucket: "lets-chat-web-app-843f6.appspot.com",
    messagingSenderId: "171940037396",
    appId: "1:171940037396:web:4e616359269ca9728df801"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

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
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         //Start code
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
        //End code
      });
    });
  
  }

  getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = index.html;
}
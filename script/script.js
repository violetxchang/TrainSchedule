 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyB4jzm0tbmxFtXex4i8bE5-4GhSsb8RXG4",
     authDomain: "users-51553.firebaseapp.com",
     databaseURL: "https://users-51553.firebaseio.com",
     projectId: "users-51553",
     storageBucket: "users-51553.appspot.com",
     messagingSenderId: "80362863635",
     appId: "1:80362863635:web:881e543d3543dd5f"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 var database = firebase.database();

 database.ref().on("child_added", function (snapshot) {
     var trainName = snapshot.val().trainName;
     var destination = snapshot.val().destination;
     var frequency = snapshot.val().frequency;
     var nextArrival = snapshot.val().nextArrival;
     var minutesAway = snapshot.val().minutesAway;

     var tr = $("<tr>");
     var td1 = $("<td>");
     td1.text(trainName);
     tr.append(td1);

     var td2 = $("<td>");
     td2.text(destination);
     tr.append(td2);

     var td3 = $("<td>");
     td3.text(frequency);
     tr.append(td3);

     var td4 = $("<td>");
     td4.text(nextArrival);
     tr.append(td4);

     var td5 = $("<td>");
     td5.text(minutesAway);
     tr.append(td5);

     $("tbody"), append(tr);
 })
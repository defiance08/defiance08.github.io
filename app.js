(function()

const config = {
			apiKey: "AIzaSyCGecVcagEL8XotKdEjfrd-g_5RHd3Qtn8",
			authDomain: "ivas-applicants.firebaseapp.com",
			databaseURL: "https://ivas-applicants.firebaseio.com",
			projectId: "ivas-applicants",
			storageBucket: "",
			messagingSenderId: "46858942694"
		};
 
 firebase.initializeApp(config);

const preObject = document.getElementById('object');

const dbRefObject = firebase.database().ref().child('object');

dbRefObject.on('value', snap => console.log(snap.val()));


}());
/*

<script src="/__/firebase/5.1.0/firebase-app.js"></script>

    <!-- Add additional services that you want to use -->
    <script src="/__/firebase/5.1.0/firebase-auth.js"></script>
    <script src="/__/firebase/5.1.0/firebase-database.js"></script>
    <script src="/__/firebase/5.1.0/firebase-messaging.js"></script>
    <script src="/__/firebase/5.1.0/firebase-functions.js"></script>

    <!-- Comment out (or don't include) services that you don't want to use -->
    <!-- <script src="/__/firebase/5.1.0/firebase-storage.js"></script> -->

    <script src="/__/firebase/init.js"></script>
	<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
	<script>
  		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyCGecVcagEL8XotKdEjfrd-g_5RHd3Qtn8",
			authDomain: "ivas-applicants.firebaseapp.com",
			databaseURL: "https://ivas-applicants.firebaseio.com",
			projectId: "ivas-applicants",
			storageBucket: "",
			messagingSenderId: "46858942694"
		};
		firebase.initializeApp(config);
</script>

*/
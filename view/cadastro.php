<!DOCTYPE html>
<html>
<head>
	<style>
	/* Center the loader */
	#loader {
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  z-index: 1;
	  width: 150px;
	  height: 150px;
	  margin: -75px 0 0 -75px;
	  border: 16px solid #f3f3f3;
	  border-radius: 50%;
	  border-top: 16px solid #3498db;
	  width: 120px;
	  height: 120px;
	  -webkit-animation: spin 2s linear infinite;
	  animation: spin 2s linear infinite;
	}

	@-webkit-keyframes spin {
	  0% { -webkit-transform: rotate(0deg); }
	  100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
	  0% { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}

	/* Add animation to "page content" */
	.animate-bottom {
	  position: relative;
	  -webkit-animation-name: animatebottom;
	  -webkit-animation-duration: 1s;
	  animation-name: animatebottom;
	  animation-duration: 1s
	}

	@-webkit-keyframes animatebottom {
	  from { bottom:-100px; opacity:0 } 
	  to { bottom:0px; opacity:1 }
	}

	@keyframes animatebottom { 
	  from{ bottom:-100px; opacity:0 } 
	  to{ bottom:0; opacity:1 }
	}

	#myDiv {
	  display: none;
	  text-align: center;
	}
	</style>
</head>
	<div id="loader"></div>

	<div style="display:none;" id="myDiv" class="animate-bottom">
	</div>

	<script src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js"></script>
	<script>
		// Initialize Firebase
		var config = {
		apiKey: "AIzaSyDpWFgOQcdzjI1JVhATYAyGzIcI7XQCvTg",
		authDomain: "eagora-be6d1.firebaseapp.com",
		databaseURL: "https://eagora-be6d1.firebaseio.com",
		projectId: "eagora-be6d1",
		storageBucket: "eagora-be6d1.appspot.com",
		messagingSenderId: "653607309132"
		};
		firebase.initializeApp(config);

		// Get a reference to the database service
		var database = firebase.database();

		database.ref('animais/' + "acessorios/" + "<?php 
				
			$count = null;
			$returnValue = preg_replace('/[.-]+/', '', $_POST['idCPF'], -1, $count);

			echo $returnValue	
				
			?>").set({
	          birth: "<?php echo $_POST['idDataNasc']; ?>",
	          email: "<?php echo $_POST['idEmail']; ?>",
	          name: "<?php echo $_POST['idNome']; ?>",
	          cpf: "<?php echo $_POST['idCPF']; ?>",
	          phone: "<?php echo $_POST['idTelefone']; ?>",
	          postalCode: "<?php echo $_POST['idCEP']; ?>",
	          rate: 0.01
	        }).then(() => {
	        	document.getElementById("loader").style.display = "none";
		  		document.getElementById("myDiv").style.display = "block";
	    		window.location = "../index.html";
	  		});
	</script>

</body>
</html>
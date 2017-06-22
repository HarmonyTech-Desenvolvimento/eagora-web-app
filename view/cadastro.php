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
    		window.location = "../index.html";
  		});

        //window.location = "../index.html";
</script>
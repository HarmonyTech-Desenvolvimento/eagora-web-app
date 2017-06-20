function writeUserData() {
	firebase.database().ref('users/' + "123").set({
		username: "teste",
		email: "teste",
		profile_picture : "teste"
	});
}
window.onload = function() {
	const andyPhoto = document.getElementById("AndyPhoto");
	console.log("DOCUMENT LOADED");

	if (andyPhoto) {
		console.log("CLICK ME!");
		andyPhoto.addEventListener("click", (event) => {
			andyPhoto.remove();
		})
	} else {
		console.log(andyPhoto);
		console.log("Don't click");
	}
	console.log("ShakePhoto.js: Testing 1 2 3");
};



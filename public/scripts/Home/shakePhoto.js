window.onload = setupBehavior();

function setupBehavior() {
	const andyPhoto = document.getElementById("AndyPhoto");

	if (andyPhoto) {
		andyPhoto.addEventListener("click", (event) => {
			andyPhoto.animate({
				transform: "translate(5px, 5px) rotateY(180deg) rotate(0deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(-5px, -10px) rotateY(180deg) rotate(-1deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(-15px, 0px) rotateY(180deg) rotate(1deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(15px, 10px) rotateY(180deg) rotate(0deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(5px, -5px) rotateY(180deg) rotate(1deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(-5px, 10px) rotateY(180deg) rotate(-1deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(-15px, 5px) rotateY(180deg) rotate(0deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(15px, 5px) rotateY(180deg) rotate(-1deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(-5px, -5px) rotateY(180deg) rotate(1deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(5px, 10px) rotateY(180deg) rotate(0deg)"
			}, 100);
			andyPhoto.animate({
				transform: "translate(5px, -10px) rotateY(180deg) rotate(-1deg)"
			}, 100);
		});
	}
};

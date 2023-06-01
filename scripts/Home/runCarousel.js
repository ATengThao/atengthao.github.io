window.onload = setupBehavior();

function setupBehavior() {
	// Create Carousel and set its options
	const carouselElement = document.getElementById("HomeCarousel");
	const carousel = new bootstrap.Carousel(carouselElement, {
		interval: 5000,
		keyboard: false,
		pause: "hover",
		ride: "carousel",
		touch: false,
		wrap: true
	});
	carousel.cycle();
};

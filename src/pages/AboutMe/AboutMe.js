import NavBar from "../../NavBar";
import Footer from "../../Footer";

import AboutMeContent from "./AboutMeContent";

function AboutMe() {
	return (
		<>
		<NavBar />
		<div className="flex-grow-1">
			<AboutMeContent />
		</div>
		<Footer />
		</>
	)
};

export default AboutMe;
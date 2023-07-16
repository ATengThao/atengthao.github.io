import NavBar from "../../NavBar";
import Footer from "../../Footer";

import EducationContent from "./EducationContent";

function Education() {
	return (
		<>
		<NavBar />
		<div className="flex-grow-1">
			<EducationContent />
		</div>
		<Footer />
		</>
	)
};

export default Education;
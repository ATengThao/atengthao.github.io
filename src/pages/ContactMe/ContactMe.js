import NavBar from "../../NavBar";
import Footer from "../../Footer";

import ContactMeContent from "./ContactMeContent";

function ContactMe() {
	return (
		<>
		<NavBar />
		<div className="flex-grow-1">
			<ContactMeContent />
		</div>
		<Footer />
		</>
	)
};

export default ContactMe;
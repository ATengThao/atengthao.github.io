import NavBar from "../../NavBar";
import Footer from "../../Footer";

import AI2048Content from "./AI2048Content";

function AI2048() {
	return (
		<>
		<NavBar />
		<div className="flex-grow-1">
			<AI2048Content></AI2048Content>
		</div>
		<Footer />
		</>
	)
};

export default AI2048;
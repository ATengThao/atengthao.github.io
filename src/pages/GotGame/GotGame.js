import NavBar from "../../NavBar";
import Footer from "../../Footer";

import GotGameContent from "./GotGameContent";

function GotGame() {
	return (
		<>
		<NavBar />
		<div className="flex-grow-1">
			<GotGameContent />
		</div>
		<Footer />
		</>
	)
};

export default GotGame;
import "../../css/home.css";

import NavBar from "../../NavBar";
import Footer from "../../Footer";
import HomeContent from "./HomeContent";

function Home() {
	return (
		<>
		<div className="d-flex flex-column h-100">
			<NavBar />
			<div className="flex-grow-1">
				<HomeContent />
			</div>
			<Footer />
		</div>
		</>
	)
};

export default Home;
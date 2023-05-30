import { Outlet, Link } from "react-router-dom";
import andyImage from "../../images/andythao.png"
import useScript from "../../useScript";

const shakePhotoPath = "https://github.com/ATengThao/atengthao.github.io/blob/main/src/scripts/ShakePhoto.js";
function HomeContent() {
	const shakePhotoScript = useScript(shakePhotoPath);
	return (
		<>
		<div className="container-fluid">
			<div id="HeroSection" className="row">
				<div className="col p-5 contentBackground">
					<div className="row">
						<div className="col-2" />
						<div className="col-3">
							<h1 id="hsHeader" className="text-center">Welcome</h1>
							<p className="text-center">I don't know what to put here!</p>
						</div>
						<div className="col-1" />
						<div className="col-5">
							<img id="AndyPhoto" src={andyImage} alt="Andy T." className="img-fluid"></img>
						</div>
						<div className="col-1" />
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-2" />
				<div className="col-8 p-5 contentBackground">
					<h2>Home</h2>
					
				</div>
				<div className="col-2" />
			</div>
		</div>
		</>
	);
}

export default HomeContent;
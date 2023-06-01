import { Outlet, Link } from "react-router-dom";

import andyImage from "../../images/andythao.png";
import stemfuseArcade from "../../images/stemfuse_arcade-logo-white.png";

import useScript from "../../useScript";

const shakePhotoPath = "scripts/Home/shakePhoto.js";
const runCarouselPath = "scripts/Home/runCarousel.js";
function HomeContent() {
	const shakePhotoScript = useScript(shakePhotoPath);
	const runCarouselScript = useScript(runCarouselPath);
	return (
		<>
		<div className="container-fluid">
			<div id="HeroSection" className="row">
				<div className="col p-5 contentBackground">
					<div className="row">
						<div className="col-2" />
						<div className="col-3">
							<h1 id="hsHeader" className="text-center">Welcome!</h1>
							<p className="text-center">
								Curious on who I may be?
								Have a look around and find out things about me!
								You may even find something interesting... or not.
							</p>
							<div className="d-flex justify-content-center gap-2">
								<Link to="/about"><button type="button" className="btn btn-danger">Learn About Me</button></Link>
								<Link to="/contact"><button type="button" className="btn btn-outline-danger">Contact Me</button></Link>
							</div>
						</div>
						<div className="col-1" />
						<div className="col-5">
							<img id="AndyPhoto" src={andyImage} alt="Andy T." className="img-fluid"></img>
						</div>
						<div className="col-1" />
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-center mx-5 mt-5 p-3 border-bottom border-danger border-3">Projects</h1>
			</div>
			<div id="HomeCarousel" className="carousel slide" data-bs-ride="carousel" style={{height: "400px"}}>
				<ol className="carousel-indicators">
					<li type="button" data-target="#HomeCarousel" data-slide-to="0" aria-label="Slide 1" aria-current="true" className="active"></li>
					<li type="button" data-target="#HomeCarousel" data-slide-to="1" aria-label="Slide 2" aria-current="false"></li>
				</ol>
				<div className="carousel-inner h-100">
					<div className="carousel-item active h-100">
						<div className="d-grid justify-content-center h-100">
							<img id="stemfuseLogo" src={stemfuseArcade} alt="Stemfuse Arcade" className="d-block w-75 h-50 m-5"></img>
							<div className="h-50 text-center">
								<h5>GOT GAME Competition Hall of Famer</h5>
								<p className="h-25 text-center">Where I took part in multiple game-making competitions</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<h1 className="text-center m-5">GOODBYE</h1>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-target="#HomeCarousel" data-slide="prev">
					<span aria-hidden="true" className="carousel-control-prev-icon"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-target="#HomeCarousel" data-slide="next">
					<span aria-hidden="true" className="carousel-control-next-icon"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* <Carousel>
				<Carousel.Item>
					<h1 className="text-center m-5">HELLO</h1>
				</Carousel.Item>
				<Carousel.Item>
					<h1 className="text-center m-5">GOODBYE</h1>
				</Carousel.Item>
			</Carousel> */}
			<div className="row my-5">
				<div className="col-2" />
				<div className="col-8 p-5 contentBackground">
					<h2>Pages</h2>
					<p>Test</p>
				</div>
				<div className="col-2" />
			</div>
		</div>
		</>
	);
}

export default HomeContent;
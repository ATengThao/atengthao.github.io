import { Outlet, Link } from "react-router-dom";

import andyImage from "../../images/andythao.png";
import stemfuseArcade from "../../images/stemfuse_arcade-logo-white.png";
import game2048 from "../../images/2048_game.png";
import UOM from "../../images/UOMLogo.jpg";
import friends from "../../images/onlinefriendgroup.png";
import roshan from "../../images/roshan.webp";
import coding from "../../images/unityscript.png";

import useScript from "../../useScript";

const shakePhotoPath = "scripts/Home/shakePhoto.js";
const runCarouselPath = "scripts/Home/runCarousel.js";
function HomeContent() {
	const shakePhotoScript = useScript(shakePhotoPath);
	const runCarouselScript = useScript(runCarouselPath);
	const carouselHeight = "400px";
	const carouselHeightHalved = (parseInt(carouselHeight)/2).toString() + "px";
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
								<Link to="/about"><button type="button" className="btn btn-secondary">Learn About Me</button></Link>
								<Link to="/contact"><button type="button" className="btn btn-outline-secondary">Contact Me</button></Link>
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
				<h1 className="text-center mx-5 mt-5 p-3 border-bottom border-danger border-3">Projects I've Done</h1>
			</div>
			<div id="HomeCarousel" className="carousel slide" data-ride="carousel" style={{height: carouselHeight}}>
				<ol className="carousel-indicators">
					<li type="button" data-target="#HomeCarousel" data-slide-to="0" aria-label="Slide 1" aria-current="true" className="active"></li>
					<li type="button" data-target="#HomeCarousel" data-slide-to="1" aria-label="Slide 2" aria-current="false"></li>
				</ol>
				<div className="carousel-inner h-100">
					<div className="carousel-item active h-100">
						<div className="d-grid justify-content-center h-100">
							<Link to="/gotgame">
								<img id="stemfuseLogo" src={stemfuseArcade} alt="Stemfuse Arcade" className="d-block w-75 h-50 m-5 object-fit-contain"></img>
							</Link>
							<div className="h-50 text-center">
								<h5>GOT GAME Competition Hall of Famer</h5>
								<p className="h-25 text-center">Where I took part in multiple game-making competitions</p>
							</div>
						</div>
					</div>
					<div className="carousel-item h-100">
						<div className="d-grid justify-content-center h-100 m-0 g-0 p-0">
							<Link to="/ai2048" className="" style={{height: carouselHeightHalved}}>
								<img id="2048game" src={game2048} alt="2048 Game AI" className="d-grid w-100 h-auto object-fit-cover"></img>
							</Link>
							<div className="h-50 text-center">
								<h5>AI Heuristic Implementation</h5>
								<p className="h-25 text-center">Designing a heuristic to improve an existing AI for the 2048 game</p>
							</div>
						</div>
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
			<div className="row my-5">
				<div className="col-2" />
				<div className="col-8 p-5 contentBackground">
					<h2>Pages to checkout</h2>
					<div className="row p-0 m-0">
						<div className="col">
							<div className="card text-bg-success" style={{width: "200px"}}>
								<Link to="/education">
									<img src={UOM} className="card-img-top" alt="University of Minnesota" style={{height: "150px"}}></img>
								</Link>
								<div className="card-body">
									<h4 className="card-title text-secondary">Education</h4>
									<p className="card-text">Where I studied and received my Bachelor's</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card text-bg-success" style={{width: "200px"}}>
								<Link to="/gaming">
									<img src={roshan} className="card-img-top" alt="Roshan from DotA 2" style={{height: "150px"}}></img>
								</Link>
								<div className="card-body">
									<h4 className="card-title text-secondary">Video Games</h4>
									<p className="card-text">How video games have made an influence on me</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card text-bg-success" style={{width: "200px"}}>
								<Link to="/creativeart">
									<img src={friends} className="card-img-top" alt="My Online Friend Group" style={{height: "150px"}}></img>
								</Link>
								<div className="card-body">
									<h4 className="card-title text-secondary">Creative Arts</h4>
									<p className="card-text">My passion for creative arts such as drawing or writing</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card text-bg-success" style={{width: "200px"}}>
								<Link to="/programming">
									<img src={coding} className="card-img-top" alt="Starting Unity Script" style={{height: "150px"}}></img>
								</Link>
								<div className="card-body">
									<h4 className="card-title text-secondary text-nowrap">Programming</h4>
									<p className="card-text">The biggest way of making my mark on the virtual world</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-2" />
			</div>
		</div>
		</>
	);
}

export default HomeContent;
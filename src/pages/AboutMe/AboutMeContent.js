import { Link } from "react-router-dom";

import andythao from "../../images/andythao_about.png";

function AboutMeContent() {
	return (
		<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-2" />
				<div className="col-4 text-center contentBackground mt-5">
					<p></p>
					<img id="AboutMePhoto" src={andythao} alt="Andy T." className="img-fluid h-75"></img>
					<figcaption className="">I'm not in a lot of photos...</figcaption>
				</div>
				<div id="BasicInfo" className="col-4 contentBackground mt-5">
					<h1>Who Am I?</h1>
					<p>
						Hello! I'm Andy Thao (He/Him) and I've always been around computers since before I was even five years old.
						Being continuously exposed to computers as my life continued, it would come to no surprise that it would eventually lead me into becoming a programmer.
						As a programmer, I hope to connect this to my related major way of entertainment- video games - and become a fulfilling video game developer.
						My hopes one day is to make a video game I dream of, one that many others will love to play.
					</p>
					<p>
						More info about specific topics in the "Pages to checkout" section on the <Link to="/">Home</Link> webpage.
					</p>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-2" />
				<div id="Hobbies" className="col-4 contentBackground">
					<h1>Hobbies</h1>
					<ul>
						<li>Playing video games</li>
						<li>Reading and writing</li>
						<li>Programming</li>
						<li>Talking and texting my friends</li>
						<li>Practicing the guitar</li>
					</ul>
				</div>
				<div className="col-4 contentBackground">
					<h1>Fun Facts</h1>
					<ul>
						<li>My favorite book series is Artemis Fowl by Eoin Colfer. I advise you to NOT watch the movie.</li>
						<li>I got the Patrick Gilmore Band Award when I graduated from highschool. Being a band student was a huge part of my time in school.</li>
					</ul>
				</div>
				<div className="col-2" />
			</div>
		</div>
		</>
	);
}

export default AboutMeContent;
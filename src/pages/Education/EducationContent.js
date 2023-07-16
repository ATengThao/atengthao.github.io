import { Link } from "react-router-dom";

import UoM from "../../images/education/UOMHomePageThumbnail.jpg";

function EducationContent() {
	return (
		<>
		<div className="container-fluid">
			<div className="row ">
				<div className="col-2" />
				<div className="col-4 contentBackground mt-5 pb-3">
					<h1>Education</h1>
					<p>
						I graduated from the University of Minnesota - Twin Cities, having a bachelors in Computer Science from the College of Liberal Arts.
						My entire four years at the university was directed towards that degree, in hopes that one day it can lead me into the field of game development.
						It wasn't entirely a smooth process due to having obstacles such as mental health, difficulty of the courses, and the emergence of COVID-19. 
						However, I stuck through it all til the end with a 3.0 GPA - and I don't regret it.
					</p>
					<Link to="/pdf/BachelorsDegree.pdf" target="_blank">Proof Of My Degree</Link>
				</div>
				<div className="col-4 contentBackground mt-5">
					<img id="UoMThumbnail" src={UoM} alt="University of Minnesota" className="img-fluid pt-5"></img>
					<figcaption className="text-center"><Link to="https://twin-cities.umn.edu">University of Minnesota - Twin Cities</Link></figcaption>
				</div>
				<div className="col-2"></div>
			</div>
		</div>
		</>
	)
}
export default EducationContent;
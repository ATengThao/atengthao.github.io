import gameImage from "../../images/ai/2048_game.png";

function AI2048Content() {
	return (
		<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-2" />
				<div id="BasicInfo" className="col-4 contentBackground mt-5">
					<h1>Introduction</h1>
					<p>
						In my final semester of college, I was in a computer science class called <em>Intro: Artificial Intelligence</em>.
						As the name suggested, it focused on AI; particularly on algorithms and the ideas behind these algorithms.
						This class taught us topics such as agents and environment, search strategies, heuristics, and constraint satisfaction problems to name a few.
						Though I mainly chose this class for its writing-intensive prerequisite needed for my degree, I found it to be incredibly engaging.
						There wasn't much programming done up until the final project that me and two others were tasked with.
						We had chosen the assignment of finding an AI game solver for a simplistic video game, and modifying it in order to improve on its performance.
						The video game our group had chosen was the popular 2048 game.
						Thanks to this project, it sparked my interest in this field of computer science and is something personally worth remembering.
					</p>
					<p>
					</p>
				</div>
				<div className="col-4 text-center contentBackground mt-5">
					<p></p>
					<img id="2048Game" src={gameImage} alt="2048 Game" className="img-fluid h-75"></img>
					<figcaption className=""></figcaption>
				</div>
				<div className="col-2"></div>
			</div>
		</div>
		</>
	)
}
export default AI2048Content;
import msDrawing00 from "../../images/mspaint_pc.png";
import msDrawing01 from "../../images/mspaint_lost.png";

const gotGameURL = "https://www.stemfuse.com/GOTGame";
const gameitURL = "https://www.stemfuse.com/product/GAMEIT";
function GotGameContent() {
	return (
		<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-2" />
				<div id="GotGameIntroduction" className="col-5 contentBackground mt-5">
					<h1>Introduction</h1>
					<p>
						In highschool, I joined an afterschool video game coding club with my friend.
						This club taught us how to make video games using the Construct 2 game engine by Scirra Ltd.
						The game engine utilizes block-based programming, which allowed us to very easily make games.
						However, the club's main goal was to get us into a video game making competition.
						That competition is STEM Fuse's Got Game, which is only open to all students grades 5-12 enrolled in a course provided by the same organization.
						<br></br>
						<br></br>
						You can read more about the competition info here: <a href={gotGameURL} target="_blank" rel="noopener noreferrer">Stemfuse GOTGame</a>
						<br></br>
						The course itself is explained here: <a href={gameitURL} target="_blank" rel="noopener noreferrer">Stemfuse GAME:IT</a>
					</p>
				</div>
				<div className="col-3 text-center contentBackground mt-5">
					<div className="my-5">
						<img id="MSDrawing00" src={msDrawing00} alt="Computer" className="img-fluids"></img>
						<figcaption>Brought to you by Windows 10 Paint.</figcaption>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-4 contentBackground text-center">
					<div className="my-5">
						<img id="MSDrawing01" src={msDrawing01} alt="Confused on where to go from here" className="img-fluids"></img>
						<figcaption>It was difficult to choose what kind of video game I wanted to make.</figcaption>
					</div>
				</div>
				<div id="GotGame" className="col-4 contentBackground">
					<h1>Learning to make my own Video Game</h1>
					<p>
						I joined the club because me and my friend were enthusiastic about video games, and we wanted to pursue a path in game development.
						Unlike most others who used the program to spend time with their friends on computers, I really wanted to make <em>my</em> own video game.
						Unfortunately, I couldn't do so until I had finished all of the beginners work; which taught us step-by-step on how to make a game that was already prebuilt and playable.
						Our motivation made us soar through the numerous courses and tutorials given by the program.
					</p>
					<p>
						When I finally got the all work checked off, I was free to make my own video game.
						At this point in my video making progress, I didn't know exactly what kind of game I wanted to make.
						I did not expect to struggle as much as I did on that problem, but when it happened I didn't know how to overcome that obstacle.
						As such, a lot of the games I made were experimental.
						This means that most of the games I created never really had much content or were not further extended upon.
						That doesn't mean the quality of the game wasn't finished, but it also meant that it wouldn't be memorable or fun for long.
						However, because I was willing to experiment with game elements, I was actually able to make some interesting games I didn't think I would want to make otherwise.
					</p>
				</div>
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-4 contentBackground">

				</div>
				<div className="col-4 contentBackground">
					
				</div>
				<div className="col-2" />
			</div>
		</div>
		</>
	);
}

export default GotGameContent;
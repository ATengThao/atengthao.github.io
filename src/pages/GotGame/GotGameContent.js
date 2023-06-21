import msDrawing00 from "../../images/mspaint_pc.png";
import msDrawing01 from "../../images/mspaint_lost.png";
import vexblockation from "../../images/games/vexblockation.png";

const gotGameURL = "https://www.stemfuse.com/GOTGame";
const gameitURL = "https://www.stemfuse.com/product/GAMEIT";
const hallOfFameURL = "https://educate.stemfuse.com/arcade/competition/hall-of-fame";
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
						<img id="MSDrawing00" src={msDrawing00} alt="Computer" className="img-fluid"></img>
						<figcaption>Brought to you by Windows 10 Paint.</figcaption>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-4 contentBackground text-center">
					<div className="my-5">
						<img id="MSDrawing01" src={msDrawing01} alt="Confused on where to go from here" className="img-fluid"></img>
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
				<div className="col-8 contentBackground">
					<h1>My Games</h1>
					<p>
						The total number of games I have made are close to five.
						Out of that many, I think only four have ever been submitted into the Got Game competition.
						And out of those four, only three have placed in the top three; with the one never even getting its chance to be displayed.
						Though I would love to show all the games I've ever made in Construct 2, 
							the ones I will show are available to be played on the <a href={hallOfFameURL} target="_blank" rel="noopener noreferrer">Got Game Hall of Fame</a>,
							so I will be talking about these three instead.
					</p>
				</div>
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-1 contentBackground" />
				<div className="col-6 contentBackground">
					<h3>Vexblockation</h3>
					<div className="row">
						<div className="col-6">
							<p>
								The first ever video game I submitted into the competition, being also the first game I ever publicly released.
								Vexblockation is a platformer game with the premise of vexing, or angering, the player.
								It does this by cheap-shotting the player with invisible walls, hidden traps, and difficult-to-avoid hazards.
								That's basically all it is: just a series of difficult levels for the player to complete.
							</p>
						</div>
						<div className="col-6">
							<img id="VexblockationImage" src={vexblockation} alt="Vexblockation" className="img-fluid object-fit-contain my-1"></img>
						</div>
					</div>
					<p>
						There's a lot I want to say about this video game.
						Firstly, I don't know why I made it so unfair.
						The movement in this game is absolutely atrocious as I feel like I'm skating all over the place.
						There are some very janky behavior with the Construct 2 engine that I also refused to acknowledged, 
							like the weird interactions the player can have with the yellow enemies when they spawn, or the moving blocks and their collisions.
						I also remember that I had the quality of the game "art" upped in my client, but it wasn't how it would be displayed if published.
						As such, I really hate how the game looks as it does now; which would of been really easily fixed if I had accounted for it beforehand.
					</p>
					<p>
						However, I will say that being my first game, I'm proud of it.
						
					</p>
				</div>
				<div className="col-1 contentBackground" />
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-1 contentBackground" />
				<div className="col-3 contentBackground">
					<h3>Blocker</h3>
				</div>
				<div className="col-3 contentBackground">
					<p>Testing</p>
				</div>
				<div className="col-1 contentBackground" />
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-1 contentBackground" />
				<div className="col-3 contentBackground">
					<h3>ENTER</h3>
				</div>
				<div className="col-3 contentBackground">
					<p>Testing</p>
				</div>
				<div className="col-1 contentBackground" />
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-4 contentBackground">
					<h1>Reflection</h1>
				</div>
				<div className="col-4 contentBackground">
					<p>Testing</p>
				</div>
				<div className="col-2" />
			</div>
		</div>
		</>
	);
}

export default GotGameContent;
import { Link } from "react-router-dom";

import gameImage from "../../images/ai/2048_game.png";
import directory from "../../images/ai/directory.png";
import board from "../../images/ai/board.png";
import plan from "../../images/ai/2048CornerStrategy.png";

function AI2048Content() {
	return (
		<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-2" />
				<div className="col-4 contentBackground mt-5">
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
					<h1>Project</h1>
					<p>
						As stated in the introduction, me and my group's final project for our AI class was to improve upon an already existing solver for the 2048 game.
						This led our group into finding any simulators posted online that could solve the game.
						The one we came upon was Thomas Ahle's GitHub project, <Link to="https://github.com/thomasahle/mcts-2048" target="_blank">mcts-2048</Link>, which used the Java programming language and utilized a Monte Carlo Tree Search algorithm.
						Ahle's project itself came with multiple strategies, all which helped guide us through understanding how to work the program as well as making our own strategies/heuristic.
						Being a writing-intensive course, our group was also tasked with writing a formal report, which you can check out <a href="/pdf/MCTS Algorithm and Heuristic in 2048.pdf" target="_blank">here</a>.
					</p>
				</div>
				<div className="col-4 text-center contentBackground mt-5">
					<img id="2048Game" src={gameImage} alt="2048 Game" className="img-fluid h-75 w-75 mt-5"></img>
					<figcaption className="">Explanation here: <Link to="https://play2048.co" target="_blank">The 2048 Game</Link></figcaption>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-4 contentBackground">
					<h1>Setup</h1>
					<p>
						In the group, I played the main role of figuring out the code and running the program.
						The GitHub project itself was neatly organized, having two folders: one for measures which acted as the algorithm, and one for strategies which acted as the heuristics.
						We focused on making strategies, and stuck with the default measure, SumMeasure.
						My analysis of SumMeasure is that it will sum all of the values of all tiles in each game state that could be resulted from a move.
						Once it gets all of the sums of each game state, it will compare it with one another and decide which move to make based on the game state with the highest value.
					</p>
				</div>
				<div className="col-1 contentBackground">
					<br></br>
					<img id="githubDirectory" src={directory} alt="Directory" className="img-fluid h-50 mt-5"></img>
					<figcaption className=""></figcaption>
				</div>
				<div className="col-3 contentBackground">
					<h1><br></br></h1>
					<p>
						The other crucial piece of working with the program required us to also look at the Board class and the Main class.
						Understanding the Main class is pretty simple as it is only used to run the simulation.
						It runs a function called test that starts the simulation a given amount of time with the provided strategy and measure.
						Thanks to this, we could create our own stategies and be able to use it in the simulation.
					</p>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-5 contentBackground">
					<img id="aiGameboard" src={board} alt="Game Board" className="img-fluid h-100"></img>
					<figcaption className=""></figcaption>
				</div>
				<div className="col-3 contentBackground">
					<br></br>
					<p>
						The Board class was one of the vital things we needed to understand, and one that was more complex than the others.
						Still, it didn't take long to get a good idea of what the class provided.
						As you can see on the left, the tiles and grid of the game is represented as an array; with -1's being the borders and the 0's being empty tiles.
						In order to know which index of grid are non-border tiles, we are given the variable "all" which contains the indices of the grid.
						This was mostly what we needed to begin making our own strategy.
					</p>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-5 contentBackground pt-3">
					<h1>Experiment</h1>
					<p>
						Before we even started on the code, we first planned out our strategy on how to even beat the game.
						The best strategy we knew of was what we deemed as the corner strategy.
						Basically, to win at the 2048 game consistently, the highest numbered tile should be placed in one of the four corners of the grid.
						Then either a column or row that contains that corner tile will be occupied with big numbers that decreases the further away it is from the highest numbered corner tile.
					</p>
					<p>
						Using the example on the right, the biggest numbered tile is 256 located in the bottom right corner.
						The player had two options to go from here: the blue column or the red row - to which they had chosen the red row.
						Choosing this row, they have opted in putting any of their bigger numbers along it; from lowest to highest.
						It is this example we're trying to imitate the agent into soon doing using our strategy.
					</p>
					<p>
						With our plan set, we started our new strategy by copying the default strategy given and modifying it to suit our needs.
						Then, we added a system that gave more points based on if the biggest number was located in a corner.
						Additionally, we checked for values along its row or column.
						After some more adjustments, we were happy with what we had.
						More info can be read in our report given in the Project section.
					</p>
				</div>
				<div className="col-3 contentBackground">
					<img id="aiPlan" src={plan} alt="Game Plan" className="img-fluid h-100 w-100 pt-3"></img>
					<figcaption className=""></figcaption>
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-2 contentBackground pt-3"></div>
				<div className="col-4 contentBackground pt-3">
					<h1 className="text-center">Reflection</h1>
					<p className="text-center">
						Overall, this was a cool assignment that I got to do in my last semester of college.
						It really eased my way of thinking more about AI and it taught me new things that peaked my interest in it.
						The final project was also a delight, since I was basically given a push to figure out another person's program essentially by myself.
						Not only that, being able to modify the program to do more was also an experience that felt incredible to do.
					</p>
				</div>
				<div className="col-2 contentBackground pt-3"></div>
				<div className="col-2" />
			</div>
		</div>
		</>
	)
}
export default AI2048Content;
import msDrawing00 from "../../images/mspaint_pc.png";
import msDrawing01 from "../../images/mspaint_lost.png";
import msDrawing02 from "../../images/mspaint_winner.png";
import vexblockation from "../../images/games/vexblockation.png";
import blocker from "../../images/games/blocker.png";
import enter from "../../images/games/enter.png";

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
						Seeing this game again represents what I care for when it comes to developing video games:
							interesting and fun mechanics alongside intriguing level design.
						Making walls climbable, spawning enemies from the water, moving projectiles, and more; all of it really makes everything a lot more interesting and engaging.
						Although it is a platformer, I am glad to have add my own spice to it.
						I am pleasantly happy about it being in second place, the reward being a $50 prize at the time.
					</p>
				</div>
				<div className="col-1 contentBackground" />
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-1 contentBackground" />
				<div className="col-6 contentBackground">
					<h3>Blocker</h3>
					<div className="row">
						<div className="col-6">
							<p>
								After making Vexblockation, I was really stumped on what I wanted to do next.
								The problem I had was that I didn't want to make another platformer game, but I just didn't know what else to do either in the Construct 2 engine.
								This is where my experimentations came in, and I found that it could be quite amusing to see an object bounce from a collision.
							</p>
						</div>
						<div className="col-6">
							<img id="BlockerImage" src={blocker} alt="Blocker" className="img-fluid object-fit-contain my-1"></img>
						</div>
					</div>
					
					<p>
						Thus comes Blocker, a game where blocks periodically spawn and move from one side of the screen to the other.
						The objective here is that the player has a block of their own to prevent it from happening.
						This block can be moved by the player and be used to overlap other blocks to wither them down.
						Eventually, the amounts of blocks spawning will be too much for the player to handle, and they will lose the game.
						There is no way of winning, but you can try to get the highest points possible.
					</p>

					<p>
						I remember how happy I was for making Blocker, despite how simple it was.
						The concept of the game felt unique to me even though it wasn't really perfect.
						Maybe I was just happy that I didn't make another platformer, that I can prove I can be creative and think outside the box.
						Or possibly it was because I didn't spend as much time on this as I did on Vexblockation, and it was still able to get into 3rd place.
						If someone were to ask me if I liked this game better than Vexblockation, I would say yes; even though it has only won me a prize of $25.
					</p>
				</div>
				<div className="col-1 contentBackground" />
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-1 contentBackground" />
				<div className="col-6 contentBackground">
					<h3>ENTER</h3>
					<div className="row">
						<div className="col-6">
							<p>
								The years went by and soon enough I was a senior in highschool.
								This would be the final year I could submit something into the competition, and I was running out of creativity at the time.
								The previous competition I had entered had a game I put a lot of care and work in; one that I very much liked.
								When I discovered that it didn't even get on the list of games that could get top three, I was genuinuely disheartened.
								Honestly, I didn't want to make another game anymore afterwards since I had felt like I was burnt out.
								However, this year's competition became significantly more impressive due to the unexpected increase of the first place reward.
								The previous years were either one-hundred to one-hundred and fifty five dollars, this time it was five-hundred.
								At that point, I had to enter the competition - no pun intended.
								Still, I had no idea what video game to make; so I looked at my previous games.
							</p>
						</div>
						<div className="col-6">
							<img id="EnterImage" src={enter} alt="Enter" className="img-fluid object-fit-contain my-1"></img>
						</div>
					</div>
					<p>
						ENTER became my final ever submission in the GOT Games competition.
						After taking a look again at my first submitted game, Vexblockation, I knew I had to apply what I learned thus far to make a better platformer.
						Unlike Vexblockation, this game wouldn't be trying to infuriate the player with cheap tricks - though it would definitely still be challenging and difficult.
						The premise was still the same: overcome the obstacles and get to the end of the level to go onto the next.
						What made this game different is the emphasis on the player's speed; a concept one would be familiar with if they had ever played Sonic.
						The more the player would run in one direction, the more speed they would build up until they stopped moving.
						Combining this speed with various environment obstructions and hazards, I had an interesting platformer game.
					</p>
					<p>
						Honestly, I did not expect my game to reach the top ten - nor did I expect it to get first place.
						When I got into first place, I was legitimately confused: I don't think I had much appreciation for this game up until that point.
						Compared to the other games; they had more art, sound, and interesting designs.
						To this day, I do not fully know why I won; my only guess being the sheer amount of block-code I added in the game, going complete ham on the mechanics and behaviors of everything.
						That being said, ENTER is a game I'm proud of not because of the money it won, but because of the personal growth: the culmination of everything I had learned in the club.
					</p>
				</div>
				<div className="col-1 contentBackground" />
				<div className="col-2" />
			</div>
			<div className="row">
				<div className="col-2" />
				<div className="col-4 contentBackground">
					<h1>Reflection</h1>
					<p>
						Joining the video game club in highschool was one of the best choices I could of made.
						I had always wanted to make video games, and that club got me onto that path.
						It was the perfect introduction, and because of it I knew for certain that this was the thing I wanted to do in life.
						Though none of the games I had made are personally satisfying to me, each one of them helped my growth in game design and furthered my love for making video games.
					</p>
					<p>
						Looking at my accomplishments, it's wild to believe that I have come in first, second, third, and none at all.
						Up until ENTER, I had always been very confident of my games.
						That's funny for me to say, since ENTER was the one that came in first place.
						I knew that my strength, when it came to video game design, lied in gameplay and mechanics.
						Those were, to me, what made a video game fun: having the ability to control your character in different ways and have it interact with the surrounding environment.
						It was creativity though that I think made me so confident.
						If you had asked me back when our games were being judged if I honestly thought my submitted video game would get into first place for every game other than ENTER, I would of said yes.
						I had a huge ego, and I really thought my game was more fun than any of the other submissions; which really isn't the case I see now.
					</p>
					<p>
						To this day, I am mostly unsatisfied with all of my submitted games.
						Honestly, I think that's a good thing.
						I want to keep making games, and replaying these old games of mine keeps on telling me to carry on.
						When I see them, they scream potential; that if I could design these kinds of games at a young age, it'll get me far in the gaming industry.
						So that's what I'm gonna keep doing, and hopefully it'll get me somewhere nice someday in life.
					</p>
				</div>
				<div className="col-4 contentBackground">
					<img id="MSDrawing02" src={msDrawing02} alt="GOT GAME Competition Winner" className="img-fluid"></img>
					<figcaption>Yeah, I'm the best.</figcaption>
				</div>
				<div className="col-2" />
			</div>
		</div>
		</>
	);
}

export default GotGameContent;
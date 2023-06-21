import gmail from "../../images/gmail_logo.png";
import twitter from "../../images/twitter_logo.png";
import youtube from "../../images/youtube_logo.png";
import discord from "../../images/discord_logo.png";
import github from "../../images/github_logo.png";

const githubURL = "https://github.com/ATengThao";
function ContactMeContent() {
	return (
		<>
		<div className="container-fluid">
			<div className="row mt-5">
				<div className="col-3"></div>
				<div className="col-6 contentBackground">
					<h1>Contacts</h1>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-1 contentBackground">
					<img id="GmailIcon" src={gmail} alt="Gmail" className="img-fluid"></img>
				</div>
				<div className="col-5 contentBackground">
					<p className="fs-5">
						The number one way of contacting me:
						<br></br>
						<a href="mailto: atengthao@gmail.com">atengthao@gmail.com</a>
					</p>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-1 contentBackground">
					<img id="TwitterIcon" src={twitter} alt="Twitter" className="img-fluid"></img>
				</div>
				<div className="col-5 contentBackground">
					<p className="fs-5">
						Publicly unavailable.
					</p>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-1 contentBackground">
					<img id="YouTubeIcon" src={youtube} alt="YouTube" className="img-fluid"></img>
				</div>
				<div className="col-5 contentBackground">
					<p className="fs-5">
						Publicly unavailable.
					</p>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-1 contentBackground">
					<img id="DiscordIcon" src={discord} alt="Discord" className="img-fluid"></img>
				</div>
				<div className="col-5 contentBackground">
					<p className="fs-5">
						Publicly unavailable.
					</p>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-1 contentBackground">
					<img id="GitHubIcon" src={github} alt="GitHub" className="img-fluid"></img>
				</div>
				<div className="col-5 contentBackground">
					<p className="fs-5">
						I don't have much here, but you're free to check it out!
						<br></br>
						{/* Redirect to external page using <a>*/}
						<a href={githubURL} target="_blank" rel="noopener noreferrer">https://github.com/ATengThao</a>
					</p>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
		</>
	)
};

export default ContactMeContent;
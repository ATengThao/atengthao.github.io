import { Outlet, Link } from "react-router-dom";
import './css/footer.css';

function Footer() {
	return (
		<>
		<footer id="footer" className="navbar-expand-lg fw-bolder p-0">
			<div className="container">
				<div id="footerRow" className="row justify-content-between">
					<div className="col">
						<ul id="navLinks" className="navbar-nav justify-content-end">
							<li className="p-3">
								<Link to="/about" className="navContent nav-link">About</Link>
							</li>
							<li className="p-3">
								<Link to="/contact" className="navContent nav-link">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		<Outlet />
		</>
	);
}

export default Footer;
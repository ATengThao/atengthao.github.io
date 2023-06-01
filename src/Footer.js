import { Outlet, Link } from "react-router-dom";


function Footer() {
	return (
		<>
		<footer id="footer" className="nav navbar navbar-expand-lg fw-bolder p-0">
			<div className="container">
				<div id="navRow" className="row justify-content-between">
					<div className="col">
						<h1 id="navBrand" className="navbar-brand fs-1 m-3 p-0">Andy Thao</h1>
					</div>
					<div className="col">
						<ul id="navLinks" className="navbar-nav justify-content-end">
							<li className="nav-item fs-4 p-3">
								<Link to="/" className="navContent nav-link">Home</Link>
							</li>
							<li className="nav-item fs-4 p-3">
								<Link to="/other" className="navContent nav-link">Other</Link>
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
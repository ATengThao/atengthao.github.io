import { Outlet, Link } from "react-router-dom";

function NavBar() {
	return (
		<>
		<nav className="navbar navbar-expand-lg bg-secondary">
			<h1 className="col-8 navbar-brand ps-5 fs-1">Andy Thao</h1>
			<div className="links col row m-0">
				<Link to="/" className="col navbar-text text-center fs-1">Home</Link>
				<Link to="/other" className="col navbar-text text-center fs-1">Other</Link>
			</div>
		</nav>
		<Outlet />
		</>
	);
}

export default NavBar;
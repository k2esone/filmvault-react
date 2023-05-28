import { useState } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
const NavBar = () => {
	const [active, setActive] = useState(false);

	const handleMouseOver = () => {
		setActive(true);
	};
	const handleMouseOut = () =>{
		setActive(false)
	}
	


	return (
		<nav id="navbar" className="navbar navbar-expand-lg position-sticky top-0">
			<div className="container">
				<a className="navbar-brand" href="#">
					<i className="fa-solid fa-film"></i> FilmVALUT
				</a>
				<button
				onMouseOver={handleMouseOver}
				onMouseOut ={handleMouseOut}

					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i className="fas fa-bars"></i>
				</button>
				<div className={active? 'collapse navbar-collapse show':"collapse navbar-collapse"} id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<a className="nav-link" href="#">
							LogIn
						</a>
						<a className="nav-link" href="#aboutus">
							Register
						</a>
						<a className="nav-link" href="#portfolio"></a>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;

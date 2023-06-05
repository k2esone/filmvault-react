import { useRef, useState } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";
import LogInModal from "../pages/LogIn/LogInModal";
const NavBar = () => {
	const [modalShow, setModalShow] = useState(false);
	const [loginModalShow, setLogInmodalShow] = useState(false);
	const [active, setActive] = useState(false);

	const handleMouseOver = () => {
		setActive(true);
	};
	const handleMouseOut = () => {
		setActive(false);
	};

	return (
		<>
		
			<nav
				id="navbar"
				className="size navbar navbar-expand-lg position-static top-0">
				<div className="container">
					<a className="navbar-brand" href="#">
						<i className="fa-solid fa-film"></i> FilmVALUT
					</a>
					<button
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<i className="fas fa-bars"></i>
					</button>
					<div
						className={
							active
								? "collapse navbar-collapse show"
								: "collapse navbar-collapse"
						}
						id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto">
							<a onClick={() => setLogInmodalShow(true)}
							 className="nav-button nav-link" href="#">
								LogIn
							</a>
							<a
								onClick={() => setModalShow(true)}
								className="nav-button nav-link"
								href="#">
								Register
							</a>
	
						</div>
					</div>
					<LogInModal show={loginModalShow} onHide={() => setLogInmodalShow(false)}></LogInModal>
					<Modal show={modalShow} onHide={() => setModalShow(false)}></Modal>
				</div>
			</nav>
			
		</>
	);
};
export default NavBar;

import { useContext, useRef, useState } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "../pages/Register/Modal";
import LogInModal from "../pages/LogIn/LogInModal";
import BrandLogo from "./BrandLogo";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const NavBar = () => {

	const navigate = useNavigate()
	const [modalShow, setModalShow] = useState(false);
	const [loginModalShow, setLogInmodalShow] = useState(false);
	const [active, setActive] = useState(false);
	const userCtx = useContext(UserContext);

	const handleMouseOver = () => {
		setActive(true);
	};
	const handleMouseOut = () => {
		setActive(false);
	};

	const logoutHandler = () => {
		userCtx.onLogout();
		navigate("/home");
		toast.success(`
		See you soon`, {
			position: "top-center",
			autoClose: 2000,
			theme: "light",
		});

	};

	const closeModalLogin = () => {
		setLogInmodalShow(false);
	};
	const closeModaliRegister = () => {
		setModalShow(false);
	};
	
	return (
		<>
			<nav
				id="navbar"
				className="size navbar navbar-expand-lg position-static top-0">
				<div className="container">
					{/* <a className="navbar-brand" href="#">
						<i className="fa-solid fa-film"></i> FilmVALUT
					</a> */}
					<BrandLogo></BrandLogo>
					<button
						onClick={handleMouseOver}
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
						onClick={handleMouseOut}
						className={
							active
								? "collapse navbar-collapse show"
								: "collapse navbar-collapse"
						}
						id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto d-flex align-items-center">
							{!userCtx.isLogedIn && (
								<>
									<a
										onClick={() => setLogInmodalShow(true)}
										className="nav-button nav-link"
										href="#">
										LogIn
									</a>
									<a
										onClick={() => setModalShow(true)}
										className="nav-button nav-link"
										href="#">
										Register
									</a>
								</>
							)}

							{userCtx.isLogedIn && (
								<>
									<Link className="nav-button nav-link" to="/profil">
										Profil
									</Link>
									<Link className="nav-button nav-link" to="/search">
										Search
									</Link>
									<Link className="nav-button nav-link" to="/movies">
										Movies
									</Link>
									<Link className="nav-button nav-link" to="/tvseries">
										TvSeries
									</Link>

									<a
										className="nav-button nav-link"
										onClick={logoutHandler}
										href="#">
										LogOut
									</a>
								</>
							)}
						</div>
					</div>
					<LogInModal
						closeModal={closeModalLogin}
						show={loginModalShow}
						onHide={() => setLogInmodalShow(false)}></LogInModal>
					<Modal
						closeModal={closeModaliRegister}
						show={modalShow}
						onHide={() => setModalShow(false)}></Modal>
				</div>
			</nav>
		</>
	);
};
export default NavBar;

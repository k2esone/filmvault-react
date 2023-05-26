import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
	
			<div className="nav_items">
      <button className="burger_btn">
				<div className="burger_btn_box">
					<div className="burger_btn_bars"></div>
				</div>
			</button>
				<div className="log">
					<h2>FilmValut</h2>
				</div>
				<div className="menu_item one">
					Menu
          </div>
          <button className="burger_btn">
				<div className="burger_btn_box">
					<div className="burger_btn_bars"></div>
				</div>
			</button>
					<ul className="dropdown">
						<li>
							<a href="#">LogIn</a>
						</li>
						<li>
							<a href="#">Register</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			
		</nav>
	);
};
export default NavBar;

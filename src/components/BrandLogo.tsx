import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import "./BrandLogo.css";

const BrandLogo = () => {
	return (
		<div className="brand_container">
			<div className="icon">
			<i className="fa-solid fa-film"></i>
			</div>

			<h1>Film<span className="brand-letter">V</span>alut</h1>
		</div>
	);
};
export default BrandLogo;

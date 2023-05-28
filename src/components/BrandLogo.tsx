import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import "./BrandLogo.css";

const BrandLogo = () => {
	return (
		<div className="brand_container">
			<div className="icon">
				<FontAwesomeIcon icon={faTv}/>
			</div>

			<h1>FilmValut</h1>
		</div>
	);
};
export default BrandLogo;

import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../../components/Carousel";
import'./TopMovies.css'


const TopMovies = () => {
	return (
		<div className="py-5">
			<h2 className="d-flex justify-content-center">Top Rated</h2>
			<div className="underline"></div>
			<div className="container d-flex justify-content-around">
                <Carousel></Carousel>
            </div>
		</div>
	);
};
export default TopMovies;

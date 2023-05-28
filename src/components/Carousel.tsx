import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieComp from "./MovieComp";
import "./Carousel.css";

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="cards">
			<Slider {...settings}>
				<div className="check px-1 mx-2 d-flex justify-content-center">
					<MovieComp></MovieComp>
				</div>
				<div className="check px-1 mx-2 d-flex justify-content-center">
					<MovieComp></MovieComp>
				</div>
				<div className="check px-1 mx-2 d-flex justify-content-center">
					<MovieComp></MovieComp>
				</div>
				<div className="check px-1 mx-2 d-flex justify-content-center">
					<MovieComp></MovieComp>
				</div>
				<div className="check px-1 mx-2 d-flex justify-content-center">
					<MovieComp></MovieComp>
				</div>
			</Slider>
		</div>
	);
};
export default Carousel;

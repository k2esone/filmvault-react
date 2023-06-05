import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import MovieCard from "./MovieCard";

const Carousel = (props: any) => {
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
				{props.popularMovies.map((movie: any) => (
					<div className="check px-1 mx-2 d-flex justify-content-center">
						<MovieCard

							poster_path={movie.poster_path}
							original_title={movie.original_title}
							overview={movie.overview}></MovieCard>
					</div>
				))}
			</Slider>
		</div>
	);
};
export default Carousel;

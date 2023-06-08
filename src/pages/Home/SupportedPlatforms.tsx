import "bootstrap/dist/css/bootstrap.min.css";
import "./SupportedPlatforms.css";
import apple from "../../img/platforms/apple.jpg";
import netflix from "../../img/platforms/netflix1.jpg";
import hbo from "../../img/platforms/hbop.jpg";
import disney from "../../img/platforms/disney1.jpg";
import amazon from "../../img/platforms/prime.jpg";

const SupportedPlatforms = () => {
	return (
		<div className="py-5 platofrms">
			<h2 className="display-4 text-light">Supported Platforms</h2>
			<div className="underline"></div>

			<div className="row platform-list justify-content-between py-5">
				<div className="col-md-4 col-lg-4 col-xl-2 d-flex justify-content-center my-3">
					<img src={apple} alt="" />
				</div>
				<div className="col-md-4 col-lg-4 col-xl-2 d-flex justify-content-center my-3">
					<img src={netflix} alt="" />
				</div>
				<div className="col-md-4 col-lg-4 col-xl-2 d-flex justify-content-center my-3">
					<img src={hbo} alt="" />
				</div>
				<div className="col-md-4 col-lg-4 col-xl-2 d-flex justify-content-center my-3">
					<img src={disney} alt="" />
				</div>
				<div className="col-md-4 col-lg-4 col-xl-2 d-flex justify-content-center my-3">
					<img src={amazon} alt="" />
				</div>
			</div>
		</div>
	);
};
export default SupportedPlatforms;

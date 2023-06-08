import { useEffect, useState, useContext } from "react";
import SerchBar from "../../components/SearchBar";
import { PlatformModel } from "../../model/PlatformModel";
import { SerchContext } from "../../context/CurentSearchContext";

const platformr = [
	{ name: "Netflix", checked: false },
	{ name: "Hbo", checked: false },
	{ name: "Amazon", checked: false },
	{ name: "Disney", checked: false },
	{ name: "Apple", checked: false },
];

const geners = [
	{ name: "Action", checked: false },
	{ name: "Comedy", checked: false },
	{ name: "Drama", checked: false },
	{ name: "Fantasy", checked: false },
	{ name: "Horror", checked: false },
	{ name: "Romance", checked: false },
	{ name: "Thriller", checked: false },
];

const AdvencedSearchPage = () => {
	const searchContext = useContext(SerchContext);

	const [plaforms, setplatforms] = useState(platformr);
	const [gener, setGener] = useState(geners);
	const [year, setYear] = useState<number | null>(null);

	const platformCheckHandler = (index: number) => {
		setplatforms(
			plaforms.map((platform, currenIndex) =>
				currenIndex === index
					? { ...platform, checked: !platform.checked }
					: platform
			)
		);
	};

	useEffect(() => {
		console.log(searchContext.setPlatform(plaforms));
		console.log(searchContext.platform);
	}, [platformCheckHandler]);

	return (
		<>
			<div className="underline w-100"></div>
			<div className="py-5 d-flex flex-column justify-content-center align-items-center">
				<div className="col-md-8">
					<SerchBar></SerchBar>
				</div>
				<div className="conteiner d-flex flex-row">
					<div className="adv-conteiner container-sm col-md-4 d-flex flex-column justify-content-center align-items-center">
						<h4>Choose Platforms:</h4>

						{plaforms.map((platform: any, index: number) => (
							<>
								<div key={platform.name} className="form-check w-25">
									<input
										className="form-check-input"
										type="checkbox"
										checked={platform.checked}
										id={`checkbox-${index}`}
										onChange={() => platformCheckHandler(index)}
									/>
									<label
										className="form-check-label"
										htmlFor={`checkbox-${index}`}>
										{platform.name}
									</label>
								</div>
							</>
						))}
					</div>
					<div className="adv-conteiner container-sm col-md-4 d-flex flex-column justify-content-center align-items-center">
						<h4 className="mt-5">Geners:</h4>
						{gener.map((gen: any, index: number) => (
							<>
								<div key={gen.name} className="form-check w-25">
									<input
										className="form-check-input"
										type="checkbox"
										checked={gen.checked}
										id={`checkbox-${index}`}
										onChange={() => platformCheckHandler(index)}
									/>
									<label
										className="form-check-label"
										htmlFor={`checkbox-${index}`}>
										{gen.name}
									</label>
								</div>
							</>
						))}
					</div>
					<div className="adv-conteiner container-sm col-md-4 d-flex flex-column justify-content-center align-items-center">
						<h4>Year of release:</h4>
						<div className="form-check d-flex flex-row">
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span
										className="input-group-text"
										id="inputGroup-sizing-default">
										Year
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									aria-label="Default"
									aria-describedby="inputGroup-sizing-default"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AdvencedSearchPage;
function useContex() {
	throw new Error("Function not implemented.");
}

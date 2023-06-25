import { useCallback, useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../Home/Footer";
import "./Profile.css";
import { UserProfilInformation } from "../../model/UserProfileInformationModel";
import useApi from "../../hooks/useApi";
import { GetUserProfil } from "../../api/GetUserProfil";
import { EditUserProfil } from "../../api/EditUserInformation";
import { useFirstRender } from "../../hooks/useFirstRender";
import { useForm } from "react-hook-form";

import { SerchContext } from "../../context/CurentSearchContext";
import { includes } from "lodash";
import { flushSync } from "react-dom";
import { VodPlatformsApi } from "../../api/PaltformsApi";
import { VodPlatforms } from "../../model/VodPlatformsModel";
import { DelatePlatformToUser } from "../../api/DelatePlatformUserApi";
import { AddPlatformToUser } from "../../api/AddPlatformToUserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
	const navigate = useNavigate()
	const [availableplatforms, setAvailablePlatforms] = useState<
		VodPlatforms[] | any
	>([]);
	const [userPlatforms, setUserPlatforms] = useState<VodPlatforms[] | any>([]);
	const firstRender = useFirstRender();
	const context = useContext(SerchContext);
	const [activDropdown, setActiveDropDown] = useState(false);
	const [curentProfil, setCurrentProfil] = useState<UserProfilInformation>();
	const [profilToUpdate, setProfilToUpdate] = useState<UserProfilInformation>();

	useEffect(() => {
		LoadProfil();
	}, []);

	const LoadProfil = async () => {
		await sendRequest(GetUserProfil.getProfil);
	};
	const dateToUserInformation = (data: UserProfilInformation) => {
		setCurrentProfil(data);
		console.log(data);
		setUserPlatforms(data.vodPlatforms);
	};
	const { sendRequest } = useApi(dateToUserInformation);

	const { register, handleSubmit } = useForm();

	const dateTosend = (data: UserProfilInformation) => {
		setProfilToUpdate(data);
	};

	const { isLoading, error, sendRequest: send } = useApi(dateTosend);

	const saveprofilChange = useCallback(
		async (data: any) => {
			console.log(data);
			Object.keys(data).forEach((element) => {
				if (data[element] === (null || "")) {
					delete data[element];
				}
			});

			setProfilToUpdate({ ...curentProfil, ...data });

			console.log(profilToUpdate);
		},
		[setProfilToUpdate, profilToUpdate, dateTosend]
	);

	const updateProfil = useCallback(
		async (profil: UserProfilInformation) => {
			send(EditUserProfil.Profil(profil));
		},
		[profilToUpdate, dateTosend]
	);

	useEffect(() => {
		if (typeof profilToUpdate === "undefined") {
		} else {
			updateProfil(profilToUpdate);
			toast.success(`Successs`, {
				position: "top-center",
				autoClose: 500,
				theme: "light",
			});
			navigate("/profil")
		}
	}, [profilToUpdate]);

	const getPlatforms = useCallback(async () => {
		const result = await VodPlatformsApi.getVod();
		console.log(result.data);
		setAvailablePlatforms(result.data);
	}, [availableplatforms]);

	useEffect(() => {
		if (firstRender) {
			getPlatforms();
			console.log(userPlatforms);
		}
	}, []);

	const addPlatform =async(event:React.ChangeEvent<HTMLInputElement>)=>{
		
		let exists:VodPlatforms = userPlatforms.find((filter:VodPlatforms) => filter.name === event.target.value)
		console.log(exists)
		if(exists){
			const response = await 	DelatePlatformToUser.RemovePlatform(exists.id)
			setUserPlatforms(response.data.vodPlatforms)
			
			setCurrentProfil({...curentProfil, ...response.data})
		}
		else{

			const response = await AddPlatformToUser.addPlatform(Number(event.target.id))
			console.log("Ubdejt")
		
			setUserPlatforms(response.data.vodPlatforms)
		
			setCurrentProfil({...curentProfil, ...response.data})
		

		}

	}

	

	return (
		<>
			<NavBar></NavBar>
			<div className="underlinie"></div>
			<div className="container-xl px-4 mt-4">
				{/* <!-- Account page navigation--> */}
				<hr className="mt-0 mb-4" />
				<div className="row d-flex justify-content-center align-items-center">
					<form
						className="d-flex justify-content-center align-items-center"
						onSubmit={handleSubmit((data) => {
							saveprofilChange(data);
						})}>
						<div className="col-xl-8">
							{/* <!-- Account details card--> */}
							<div className="card mb-4">
								<div className="card-header">Account Details</div>
								<div className="card-body">
									{/* <!-- htmlForm Row--> */}
									<div className="row gx-3 mb-3">
										{/* <!-- htmlForm Group (first name)--> */}
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputFirstName">
												First name
											</label>
											<input
												{...register("name")}
												className="form-control"
												id="inputFirstName"
												type="text"
												placeholder="Enter your first name"
											/>
										</div>
										{/* <!-- htmlForm Group (last name)--> */}
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputLastName">
												Last name
											</label>
											<input
												{...register("surname")}
												className="form-control"
												id="inputLastName"
												type="text"
												placeholder="Enter your last name"
											/>
										</div>
									</div>
									{/* <!-- htmlForm Row        --> */}
									<div className="row gx-3 mb-3">
										{/* <!-- htmlForm Group (organization name)--> */}
										<div className="col-md-12">
											<label className="small mb-1" htmlFor="inputOrgName">
												Gender
											</label>
											<div className="form-check form-check-inline">
												<input
													{...register("gender")}
													className="form-check-input"
													type="radio"
													id="gender-male"
													value="MALE"
												/>
												<label
													className="form-check-label"
													htmlFor="gender-male">
													Male
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													{...register("gender")}
													className="form-check-input"
													type="radio"
													id="gender-female"
													value="FEMALE"
												/>
												<label
													className="form-check-label"
													htmlFor="gender-female">
													Female
												</label>
											</div>
										</div>
									
									</div>
									{/* <!-- htmlForm Group (email address)--> */}
									<div className="mb-3">
										<label className="small mb-1" htmlFor="inputEmailAddress">
											Email address
										</label>
										<input
											{...register("email")}
											className="form-control"
											id="inputEmailAddress"
											type="email"
											placeholder="Enter your email address"
										/>
									</div>
									{/* <!-- htmlForm Row--> */}
									<div className="row gx-3 mb-3">
										{/* <!-- htmlForm Group (birthday)--> */}
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputBirthday">
												Birthday
											</label>
											<input
												{...register("birthDate")}
												className="form-control"
												id="inputBirthday"
												type="text"
												name="birthDate"
												placeholder="Enter your birthday yyyy-mm-dd"
											/>
										</div>
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputBirthday">
												Platforms
											</label>
											<div className="dropdown">
												<button
													onClick={() => setActiveDropDown(!activDropdown)}
													className={activDropdown? "btn btn-primary dropdown-toggle":"btn btn-primary"} 
													type="button"
													id="dropdownMenuButton"
													data-mdb-toggle="dropdown"
													aria-expanded="false">
													Choose Platforms
												</button>
												{availableplatforms?.map((vod: VodPlatforms) => (
													<li key={vod.id} className="menu-item menu-level-0 sub-menu list-group-item">
														<ul className="form-check flex-grow-1">
															<input
																type="checkbox"
																onChange={(e) => addPlatform(e)}
																className="form-check-input"
																value={vod.name}
																id={String(vod.id)}
																checked={userPlatforms.find(
																	(item: VodPlatforms) => item.name === vod.name
																)}
															/>
															<label
																className="form-check-label"
																htmlFor={String(vod.id)}>
																{vod.name}
															</label>
														</ul>
													</li>
												))}
											</div>
										</div>
									</div>
									{/* <!-- Save changes button--> */}
									<button
										// onClick={saveprofilChange}
										className="btn btn-primary"
										type="submit">
										Save changes
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};
export default EditProfile;

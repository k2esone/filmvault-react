import "./Profile.css";
import netflix from "../../img/platforms/netflix1.jpg";
import hbo from "../../img/platforms/hbop.jpg";
import disney from "../../img/platforms/disney1.jpg";
import { useEffect, useState } from "react";
import EditProfile from "./EditProfile";
import NavBar from "../../components/NavBar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { UserProfilInformation } from "../../model/UserProfileInformationModel";
import { GetUserProfil } from "../../api/GetUserProfil";

const Profil = () => {
	const [profilInfo, setProfilInfo] = useState<UserProfilInformation>();

	const [profilPlatforms, setProfilPlatforms] = useState([]);

	const dateToUserInformation = (data: UserProfilInformation) => {
		setProfilInfo(data);
		console.log(data);
	};
	const { isLoading, error, sendRequest } = useApi(dateToUserInformation);

	useEffect(() => {
		sendRequest(GetUserProfil.getProfil);
	}, []);

	return (
		<>
			<NavBar></NavBar>
			{!isLoading && (
				<div className="container">
					<div className="main-body">
						<div className="row gutters-sm">
							<div className="col-md-4 mb-3">
								<div className="card">
									<div className="card-body">
										<div className="d-flex flex-column align-items-center text-center">
											<img
												src={
													profilInfo?.gender === "MALE"
														? "https://bootdey.com/img/Content/avatar/avatar7.png"
														: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHYatK3If9pIyokNqd4HQzpUaoyE5b142_w&usqp=CAU"
												}
												className="rounded-circle"
												width="150"
											/>
											<div className="mt-3">
												<h4>{profilInfo?.name}</h4>

												<Link className="nav-link" to="/profil/edit">
													<button className="btn btn-primary">
														Edit Profil
													</button>
												</Link>
									
											</div>
										</div>
									</div>
								</div>
								<div className="card mt-3">
									<ul className="list-group list-group-flush">
										<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 className="mb-0">Gender</h6>
											<span className="text-secondary">
												{profilInfo?.gender}
											</span>
										</li>
										<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 className="mb-0">Role</h6>
											<span className="text-secondary">User</span>
										</li>
									
									</ul>
								</div>
							</div>
							<div className="col-md-8">
								<div className="card mb-3">
									<div className="card-body">
										<div className="row">
											<div className="col-sm-3">
												<h6 className="mb-0">Full Name</h6>
											</div>
											<div className="col-sm-9 text-secondary">
												<p>
													{profilInfo?.name} {profilInfo?.surname}
												</p>
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<h6 className="mb-0">Email</h6>
											</div>
											<div className="col-sm-9 text-secondary">
												{profilInfo?.email}
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<h6 className="mb-0">UserName</h6>
											</div>
											<div className="col-sm-9 text-secondary">
												{profilInfo?.username}
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<h6 className="mb-0">Birth Date</h6>
											</div>
											<div className="col-sm-9 text-secondary">
												{profilInfo?.birthDate}
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col-sm-3">
												<h6 className="mb-0">crreatedAt</h6>
											</div>
											<div className="col-sm-9 text-secondary">
												{profilInfo?.createdAt}
											</div>
										</div>
										<hr />
								
										<hr />
									</div>
								</div>

								<div className="row gutters-sm">
									<div className="col-sm-12 mb-3">
										<div className="card h-100">
											<div className="card-body">
												<h6 className="d-flex align-items-center mb-3">
													Streming Platform
												</h6>

												{profilInfo?.vodPlatforms.map((platform) => (
													<img
														src={`https://image.tmdb.org/t/p/w500/${platform.logoPath}`}
														alt="Admin"
														className="rounded-circle"
														width="50"
													/>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{isLoading && (
				<div className="d-flex p-2 justify-content-center align-items-center vh-100">
					<h2 className="">LOADING....</h2>
				</div>
			)}
			<Footer></Footer>
		</>
	);
};
export default Profil;

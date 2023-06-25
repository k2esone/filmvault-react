import {
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
} from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";
import Home from "../pages/Home/Home";
import SearchPage from "../pages/AdvencedSearchPage/SearchPage";
import Profil from "../pages/Profil/Profile";
import EditProfile from "../pages/Profil/EditProfile";
import Movies from "../pages/Movies/Movies";
import LogInModal from "../pages/LogIn/LogInModal";
import TvSeries from "../pages/TvSeries/TvSeries";
import ProtectedRoot from "./ProtectedRoot";

const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/home" element={<Home></Home>}></Route>
				<Route
					path="/search"
					element={
						<ProtectedRoot>
							<SearchPage></SearchPage>
						</ProtectedRoot>
					}></Route>
				<Route
					path="/profil"
					element={
						<ProtectedRoot>
							<Profil></Profil>
						</ProtectedRoot>
					}></Route>
				<Route
					path="/profil/edit"
					element={
						<ProtectedRoot>
							<EditProfile></EditProfile>
						</ProtectedRoot>
					}></Route>
				<Route
					path="/movies"
					element={
						<ProtectedRoot>
							<Movies></Movies>
						</ProtectedRoot>
					}></Route>
				{/* <Route path="/login" element={<LogInModal></LogInModal>}></Route> */}
				<Route path="*" element={<Home></Home>}></Route>
				<Route
					path="/tvseries"
					element={
						<ProtectedRoot>
							<TvSeries></TvSeries>
						</ProtectedRoot>
					}></Route>
			</Routes>
		</>
	);
};
export default AppRouter;

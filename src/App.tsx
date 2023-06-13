import "./App.css";

import { Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/AdvencedSearchPage/SearchPage";
import Movies from "./pages/Movies/Movies";
import NavBar from "./components/NavBar";
import Profil from "./pages/Profil/Profile";
import Footer from "./pages/Home/Footer";
import EditProfile from "./pages/Profil/EditProfile";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/search" element={<SearchPage/>}></Route>
				{/*<Route path="/movies" element={<Movies></Movies>}></Route>*/}
				<Route path="/profile" element={<Profil></Profil>}></Route>
				<Route path="/editprofil" element={<EditProfile></EditProfile>}></Route>
			</Routes>

		
		</>
	);
}

export default App;

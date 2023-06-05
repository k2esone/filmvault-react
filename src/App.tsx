import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./pages/Home/Header";
import SupportedPlatforms from "./pages/Home/SupportedPlatforms";
import TopMovies from "./pages/Home/TopMovies";
import { SearchOptionsProvider } from "./context/CurentSearchContext";
import Contact from "./pages/Home/Contact";
import Footer from "./pages/Home/Footer";

function App() {
	return (
		<>
			<SearchOptionsProvider>
				<NavBar></NavBar>
				<Header></Header>
				<TopMovies></TopMovies>
				<SupportedPlatforms></SupportedPlatforms>
				<Contact></Contact>
				<Footer></Footer>
			</SearchOptionsProvider>
		</>
	);
}

export default App;

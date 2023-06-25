import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import { ToastContainer, toast } from "react-toastify";
import { UserContextProvider } from "./context/UserContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<UserContextProvider>
				<AppRouter></AppRouter>
			</UserContextProvider>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/UserDashboard/DashboardPage.js";


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/auth" element={<AuthLayout />}>
						<Route path="login" element={<LoginPage />} />
					</Route>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<DashboardPage />} />
						<Route path="dashboard" element={<DashboardPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

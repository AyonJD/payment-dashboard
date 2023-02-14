import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import AppLayout from "./components/AppLayout/AppLayout";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/UserDashboard/DashboardPage.js";
import Deposit from "./pages/UserDashboard/Deposit";
import Payment from "./pages/UserDashboard/Payment";
import Withdraw from "./pages/UserDashboard/Withdraw";


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
						<Route path="dashboard/bank-transfer" element={<Deposit />} />
						<Route path="dashboard/cashout" element={<Deposit />} />
						<Route path="dashboard/payment" element={<Payment />} />
						<Route path="dashboard/deposit" element={<Deposit />} />
						<Route path="dashboard/profile" element={<Withdraw />} />
						<Route path="dashboard/settings" element={<Withdraw />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

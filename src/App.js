import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import AppLayout from "./components/AppLayout/AppLayout";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import AdminDashboardHome from "./pages/AdminDashboard/AdminDashboardHome";
import LoginPage from "./pages/Auth/LoginPage";
import BankTransfer from "./pages/UserDashboard/BankTransfer";
import CashOut from "./pages/UserDashboard/CashOut";
import DashboardPage from "./pages/UserDashboard/DashboardPage.js";
import Deposit from "./pages/UserDashboard/Deposit";
import Payment from "./pages/UserDashboard/Payment";


function App() {
	const user = { name: "Ayon", token: "1245434", role: "user" };
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/auth" element={<AuthLayout />}>
						<Route path="login" element={<LoginPage />} />
					</Route>
					<Route path="/" element={<AppLayout />}>
						{
							user.role === "admin" ? (
								<Route index element={<AdminDashboardHome />} />
							) : (
								<Route index element={<DashboardPage />} />
							)
						}

						<Route path="dashboard/bank-transfer" element={<BankTransfer />} />
						<Route path="dashboard/cashout" element={<CashOut />} />
						<Route path="dashboard/payment" element={<Payment />} />
						<Route path="dashboard/deposit" element={<Deposit />} />
						{/* <Route path="dashboard/profile" element={< />} />
						<Route path="dashboard/settings" element={< />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

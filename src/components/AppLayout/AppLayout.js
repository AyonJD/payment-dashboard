import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utility/authUtils";
import Navbar from "../Navbar/Navbar";
import AdminSidebar from "../Sidebar/AdminSidebar";
import Sidebar from "../Sidebar/Sidebar";

const AppLayout = () => {
	const user = { name: "Ayon", token: "1245434", role: "user" };
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated(user)) {
			logout(navigate);
		}
	}, []);

	return (
		<>
			{
				user.role === "admin" ? (
					<>
						<AdminSidebar>
							<Navbar />
							<Outlet />
						</AdminSidebar>
					</>
				) : (
					<>
						<Sidebar>
							<Navbar />
							<Outlet />
						</Sidebar>
					</>
				)
			}

		</>
	);
};

export default AppLayout;

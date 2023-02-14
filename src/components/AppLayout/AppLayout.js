import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utility/authUtils";
import { loadStorage } from "../../utility/localStorage";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AppLayout = () => {
	const user = { name: "Ayon", token: "1245434" };
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated(user)) {
			logout(navigate);
		}
	}, []);

	return (
		<>
			<Sidebar>
				<Navbar />
				<Outlet />
			</Sidebar>
		</>
	);
};

export default AppLayout;

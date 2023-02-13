import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utility/authUtils";
import { loadStorage } from "../../utility/localStorage";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AppLayout = () => {
	// const user = loadStorage("user");
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!isAuthenticated(user)) {
	// 		logout(navigate);
	// 	}
	// }, []);

	return (
		<>
			{/* <Navbar /> */}
			<Sidebar>
				<Outlet />
			</Sidebar>
		</>
	);
};

export default AppLayout;

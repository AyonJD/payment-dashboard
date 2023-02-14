import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utility/authUtils";

const DashboardPage = () => {
	// const user = { name: "Ayon", token: "1245434" };
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!isAuthenticated(user)) {
	// 		logout(navigate);
	// 	}
	// }, []);
	return (
		<div>
			<h1 className='text-red-600'>Dashboard</h1>
		</div>
	);
};

export default DashboardPage;

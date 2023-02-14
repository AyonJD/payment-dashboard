import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utility/authUtils";
import { loadStorage } from "../../utility/localStorage";

const AuthLayout = () => {
	const user = { name: "Ayon", token: "1245434" };
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated(user)) {
			logout(navigate);
		}
	}, []);

	return (
		<>
			<Outlet />
		</>
	);
};

export default AuthLayout;

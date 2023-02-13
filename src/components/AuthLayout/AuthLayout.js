import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utility/authUtils";
import { loadStorage } from "../../utility/localStorage";

const AuthLayout = () => {
	const user = loadStorage("user");
	const navigate = useNavigate();

	useEffect(() => {

	}, []);

	return (
		<>
			<Outlet />
		</>
	);
};

export default AuthLayout;

import React from "react";
import UserDropdown from "../DropDown/UserDropDown/UserDropDown";

const Navbar = () => {
	return (
		<>
			{/* Navbar */}
			<nav className=" w-full z-10 bg-secondary md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
				<div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
					{/* Brand */}
					<a
						className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
						href="#pablo"
						onClick={(e) => e.preventDefault()}
					>
						Central Bank Of Thiland
					</a>
					{/* User */}
					<ul className="flex-col md:flex-row list-none items-center hidden md:flex">
						<UserDropdown />
					</ul>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	);
};

export default Navbar;

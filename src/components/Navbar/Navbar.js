import React from "react";
import UserDropdown from "../DropDown/UserDropDown/UserDropDown";

const Navbar = () => {
	return (
		<>
			{/* Navbar */}
			<nav className=" w-full z-10 bg-secondary p-4">
				<div className="w-full mx-auto items-center flex justify-between md:px-10">
					{/* Brand */}
					<a
						className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
						href="#pablo"
						onClick={(e) => e.preventDefault()}
					>
						Central Bank Of Thiland
					</a>
					{/* User */}
					<ul className=" flex-row list-none items-center flex">
						<UserDropdown />
					</ul>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	);
};

export default Navbar;

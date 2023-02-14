import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./sidebar.scss";
const routes = [
	{
		path: "/",
		name: "Account Details",
		icon: <i class="fas fa-home-lg"></i>,
	},
	{
		path: "/dashboard/bank-transfer",
		name: "Bank Transfer",
		icon: <i class="fas fa-home-lg"></i>,
	},
	{
		path: "/dashboard/cashout",
		name: "Cashout",
		icon: <i class="fas fa-home-lg"></i>,
	},
	{
		path: "/dashboard/payment",
		name: "Payment",
		icon: <i class="fas fa-home-lg"></i>,
	},
	{
		path: "/dashboard/deposit",
		name: "Deposit",
		icon: <i class="fas fa-home-lg"></i>,
	},
];

const SideBar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const inputAnimation = {
		hidden: {
			width: 0,
			padding: 0,
			transition: {
				duration: 0.2,
			},
		},
		show: {
			width: "140px",
			padding: "5px 15px",
			transition: {
				duration: 0.2,
			},
		},
	};

	const showAnimation = {
		hidden: {
			width: 0,
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
		show: {
			opacity: 1,
			width: "auto",
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="sidebar_wrapper">
			<div className="main-container">
				<motion.div
					animate={{
						width: isOpen ? "220px" : "45px",

						transition: {
							duration: 0.5,
							type: "spring",
							damping: 10,
						},
					}}
					className={`sidebar `}
				>
					<div className="top_section">
						<AnimatePresence>
							{isOpen && (
								<motion.h1
									variants={showAnimation}
									initial="hidden"
									animate="show"
									exit="hidden"
									className="logo"
								>
									CBT
								</motion.h1>
							)}
						</AnimatePresence>

						<div className="bars">
							<i onClick={toggle} class="fas fa-bars"></i>
						</div>
					</div>
					<section className="routes">
						{routes.map((route, index) => {
							if (route.subRoutes) {
								return (
									<SidebarMenu
										setIsOpen={setIsOpen}
										route={route}
										showAnimation={showAnimation}
										isOpen={isOpen}
									/>
								);
							}

							return (
								<NavLink
									to={route.path}
									key={index}
									className="link"
									activeClassName="active"
								>
									<div className="icon">{route.icon}</div>
									<AnimatePresence>
										{isOpen && (
											<motion.div
												variants={showAnimation}
												initial="hidden"
												animate="show"
												exit="hidden"
												className="link_text"
											>
												{route.name}
											</motion.div>
										)}
									</AnimatePresence>
								</NavLink>
							);
						})}
					</section>
				</motion.div>

				<main className={`handle_top_padding ${isOpen ? 'small_width' : 'large_width'}`}>{children}</main>
			</div>
		</div>
	);
};

export default SideBar;

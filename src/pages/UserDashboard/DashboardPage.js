import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardAbout from "../../components/Cards/UserCards/CardAbout";
import CardBalance from "../../components/Cards/UserCards/CardBalance";
import MenuCard from "../../components/Cards/UserCards/MenuCard";
import { isAuthenticated, logout } from "../../utility/authUtils";

const DashboardPage = () => {
	const user = { name: "Ayon", token: "543545" };
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated(user)) {
			logout(navigate);
		}
	}, []);


	// Function to get the window width in pixels
	function getWindowWidth() {
		return window.innerWidth;
	}

	// Listen for changes to the window size
	window.addEventListener("resize", function () {
		// Set the window width to the state
		setWindowWidth(getWindowWidth());
	});

	return (
		<>
			<div className="relative">
				{/* Header */}
				<>
					{/* Header */}
					<div className="relative bg-bkash md:pt-32 pb-32 pt-12">
						<div className={` px-4 mx-auto md:px-10 ${(windowWidth < 1280 && windowWidth > 550) ? "w-1/2" : windowWidth < 550 ? "w-full" : 'w-4/12'}`}>
							<CardBalance />
						</div>
						<div className={`px-4 md:px-10 mx-auto w-full `}>
							<div>
								{/* Card stats */}
								{
									windowWidth > 1140 ? (
										<>
											<div className=" flex justify-between">
												<div className={`w-2/12 px-4`}>
													<MenuCard
														statSubtitle="Bank Transfer"
														statUrl="/dashboard/bank-transfer"
														statIconName="fas fa-university"
														statIconColor="bg-pink-500"
													/>
												</div>
												<div className={`w-2/12 px-4`}>
													<MenuCard
														statSubtitle="Cash Out"
														statUrl="/dashboard/cashout"
														statIconName="fas fa-hand-holding-usd"
														statIconColor="bg-orange-500"
													/>
												</div>
												<div className={`w-2/12 px-4`}>
													<MenuCard
														statSubtitle="Send Money"
														statUrl="#"
														statIconName="fas fa-share-square"
														statIconColor="bg-red-500"
													/>
												</div>
												<div className={`w-2/12 px-4`}>
													<MenuCard
														statSubtitle="Deposit"
														statUrl="/dashboard/deposit"
														statIconName="fas fa-donate"
														statIconColor="bg-blue-500"
													/>
												</div>
												<div className={`w-2/12 px-4`}>
													<MenuCard
														statSubtitle="Payment"
														statUrl="/dashboard/payment"
														statIconName="fas fa-money-check-alt"
														statIconColor="bg-emerald-500"
													/>
												</div>
											</div>
										</>
									) : (
										<>
											<div className="flex flex-wrap">
												<div className={` px-4 ${windowWidth < 573 ? "w-full" : "w-4/12"}`}>
													<MenuCard
														statSubtitle="Bank Transfer"
														statUrl="/dashboard/bank-transfer"
														statIconName="fas fa-university"
														statIconColor="bg-pink-500"
													/>
												</div>
												<div className={` px-4 ${windowWidth < 573 ? "w-full" : "w-4/12"}`}>
													<MenuCard
														statSubtitle="Cash Out"
														statUrl="/dashboard/cashout"
														statIconName="fas fa-hand-holding-usd"
														statIconColor="bg-orange-500"
													/>
												</div>
												<div className={` px-4 ${windowWidth < 573 ? "w-full" : "w-4/12"}`}>
													<MenuCard
														statSubtitle="Send Money"
														statUrl="#"
														statIconName="fas fa-share-square"
														statIconColor="bg-red-500"
													/>
												</div>
											</div>

											<div className="flex flex-wrap">
												<div className={` px-4 ${windowWidth < 573 ? "w-full" : "w-6/12"}`}>
													<MenuCard
														statSubtitle="Deposit"
														statUrl="/dashboard/deposit"
														statIconName="fas fa-donate"
														statIconColor="bg-blue-500"
													/>
												</div>
												<div className={` px-4 ${windowWidth < 573 ? "w-full" : "w-6/12"}`}>
													<MenuCard
														statSubtitle="Payment"
														statUrl="/dashboard/payment"
														statIconName="fas fa-money-check-alt"
														statIconColor="bg-blue-500"
													/>
												</div>
											</div>
										</>
									)
								}

							</div>
						</div>
					</div>
				</>
				<div className="px-4 md:px-10 mx-auto w-full -m-24">
					<div className="flex flex-wrap">
						<div className="w-full mb-12 xl:mb-0 px-4">
							<CardAbout />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardPage;

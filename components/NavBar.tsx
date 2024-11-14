import Link from "next/link";
import { useState } from "react";
import { RouteItems, Routes } from "../constants/Routes";
import useScrollPosition from "../hooks/useScrollPosition";
import Scrollspy from "react-scrollspy";


const NavBar = () => {
	const scrollPosition = useScrollPosition();

	const [navIsOpen, setNavIsOpen] = useState(false);

	const toggleNav = () => setNavIsOpen(!navIsOpen);

	return (
		<nav
			className={`px-2 py-2 sm:px-4 fixed w-full z-20 top-0 left-0  transition delay-150 duration-300 ease-in-out bg-pw-blue ${
				scrollPosition > 500 ? "md:bg-pw-blue" : "md:bg-transparent"
			}`}
		>
			<div className="lg:mx-auto container flex flex-wrap items-center justify-between">
				<div className="flex md:order-2 justify-end">
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false"
						onClick={toggleNav}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className={`${
						navIsOpen === true ? "" : "hidden"
					} items-center justify-between  w-full md:flex md:w-auto md:order-1`}
					id="navbar-sticky"
				>
					<Scrollspy
						className="lg:pl-16  items-center text-pw-grey flex flex-col mt-4 rounded-lg md:flex-row md:space-x-14 md:mt-0 "
						items={RouteItems}
						currentClassName=" md:bg-[url('/images/linkActiveBackground.svg')] md:bg-cover md:animate-pulse md:w-40 md:h-28 md:bg-center md:text-center md:align-middle md:bg-no-repeat  z-10 grid py-2 lg:pl-3 lg:pr-4 items-center  lg:-ml-6 text-pw-orange text-lg font-spartanMedium"
						scrolledPastClassName="block py-2 lg:pl-3 lg:pr-4 text-pw-grey text-lg font-medium font-spartanMedium rounded md:bg-transparent md:p-0"
					>
						{Routes.map((route) => (
							<li key={route.href}>
								<Link
									href={route.href}
									className="block py-2 md:pl-3 md:pr-4 text-lg font-medium font-spartanMedium rounded md:bg-transparent md:p-0"
									aria-current="page"
								>
									<span className="grid self-center md:-ml-5  ">
										{route.title}
									</span>
								</Link>
							</li>
						))}
					</Scrollspy>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

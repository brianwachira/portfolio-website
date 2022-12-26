import Link from "next/link";
import { useRouter } from "next/router";
import { Routes } from "../constants/Routes";
import useScrollPosition from "../hooks/useScrollPosition";
const NavBar = () => {
	const router = useRouter();

	const scrollPosition = useScrollPosition()
	return (
		<nav className={`px-2 sm:px-4 fixed w-full z-20 top-0 left-0  transition delay-150 duration-300 ease-in-out ${scrollPosition > 500 ? 'bg-pw-blue' : ''}`}>
			<div className="xl:mx-auto container flex flex-wrap items-center justify-between">
				<div className="flex md:order-2">
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false"
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
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="lg:px-12 items-center flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
						{Routes.map((route) => (
							<li key={route.href}>
								{router.asPath === "/".concat(route.href === '/' ? "" : route.href) ? (
									<Link
										href={route.href}
										className="bg-[url('/images/linkActiveBackground.svg')] bg-cover animate-pulse w-40 h-28 bg-center text-center align-middle bg-no-repeat  z-10 grid py-2 pl-3 pr-4"
										aria-current="page"
									>
										<span className="grid self-center -ml-6 text-pw-orange text-lg font-spartanMedium">
											{route.title}
										</span>
									</Link>
								) : (
									<Link
										href={route.href}
										className="block py-2 pl-3 pr-4 text-pw-grey text-lg font-medium font-spartanMedium rounded md:bg-transparent md:p-0"
										aria-current="page"
									>
										{route.title}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

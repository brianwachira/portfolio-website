import Link from "next/link";
import { SocialMediaProfile } from "../constants/SocialMediaProfile";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className=" bg-pw-blue">
			<main className="lg:bg-[url('/images/footer-bg.svg')] bg-right bg-contain bg-no-repeat px-5 pt-5 lg:pt-10 pb-5">
				<h5 className=" text-white text-sm font-spartanMedium text-center mb-5">
					Find me on social media....
				</h5>
				<div className="flex justify-center mb-5">
					<div className="inline-flex">
						{SocialMediaProfile.map((profile) => (
							<Link
								key={profile.name}
								href={profile.href}
								target="_blank"
								className="animate-pulse transition delay-150 duration-300 ease-in-out hover:scale-125"
							>
								<img src={profile.icon} alt={profile.name} className=" mr-4" />
							</Link>
						))}
					</div>
				</div>
				<div className="flex justify-center">
				<span className=" text-white text-sm font-spartanMedium text-center">
					Design inspiration from
					<Link
						href={"https://www.figma.com/community/file/1006095821656678611"}
						target="_blank"
						className=" text-sm font-spartanBold  text-pw-orange"
					>
						&nbsp;Akhil T J Portfolio Mockup Design{" "}
					</Link>
					<img
						src="/icons/figma-1.svg"
						alt=""
						className="w-5 h-5 animate-pulse inline-flex"
					/>
				</span>

				</div>
					<h5 className=" text-white text-sm font-spartanMedium text-center mt-5">
						All Rights Reserved © {year}
					</h5>
			</main>
		</footer>
	);
};

export default Footer;
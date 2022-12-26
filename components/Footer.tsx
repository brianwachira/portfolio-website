import Link from "next/link";
import { SocialMediaProfile } from "../constants/SocialMediaProfile";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className=" bg-pw-blue">
			<main className="bg-[url('/images/footer-bg.svg')] bg-right bg-contain bg-no-repeat py-10">
				<h5 className=" text-white text-sm font-spartanMedium text-center mb-5">
					Find me on socials....
				</h5>
				<div className="flex justify-center mb-5">
					<div className="inline-flex">
						{SocialMediaProfile.map((profile) => (
							<Link
								key={profile.name}
								href={profile.href}
								target="_blank"
								className="transition delay-150 duration-300 ease-in-out hover:scale-125"
							>
								<img src={profile.icon} alt={profile.name} className=" mr-4" />
							</Link>
						))}
					</div>
				</div>
				<h5 className=" text-white text-sm font-spartanMedium text-center">
					All Rights Reserved © {year}
				</h5>
			</main>
		</footer>
	);
};

export default Footer;

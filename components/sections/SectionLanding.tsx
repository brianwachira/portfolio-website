import Link from "next/link";
import { SocialMediaProfile } from "../../constants/SocialMediaProfile";
import BtnScroll from "../shared-ui/BtnScroll";

const SectionLanding = () => {
	return (
		<div className="container md:mx-auto grid h-[calc(100vh)] mt-28">
			<div className="grid self-start"></div>
			<div className="mx-auto grid-self-center mt-36 lg:px-20 container">
				<h1 className=" font-spartanExtraBold text-4xl stroke-text text-center lg:text-left">
					Brian Wachira
				</h1>
				<h2 className="font-spartanSemiBold text-2xl text-white my-4 text-center lg:text-left">
					Software Engineer
				</h2>
				<div className="flex justify-center lg:justify-start">
					{SocialMediaProfile.map((profile) => (
						<Link
							key={profile.name}
							href={profile.href}
							target="_blank"
							className="transition delay-150 duration-300 ease-in-out hover:scale-125"
						>
							<img src={profile.icon} alt={profile.name} className=" mr-4"   loading="lazy"/>
						</Link>
					))}
				</div>
			</div>
			<div className="grid self-end lg:px-20 container">
				<BtnScroll light />
			</div>
		</div>
	);
};

export default SectionLanding;

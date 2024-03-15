import { socialMediaProfileContent } from "../../constants";
import BtnScroll from "../shared-ui/BtnScroll";
import { landingPageContent } from "../../constants";
import SocialMediaButton from "../SocialMediaButton";

const SectionLanding = () => {
	const { title, description } = landingPageContent;
	return (
		<div id="home" className="container md:mx-auto grid h-[calc(100vh)] mt-28">
			<div className="grid self-start"></div>
			<div className="mx-auto grid-self-center mt-36 lg:px-20 container">
				<h1 className=" font-spartanExtraBold text-4xl stroke-text text-center lg:text-left">
					{title}
				</h1>
				<h2 className="font-spartanSemiBold text-2xl text-white my-4 text-center lg:text-left">
					{description}
				</h2>
				<div className="flex justify-center lg:justify-start">
					{socialMediaProfileContent.map((item) => (
						<SocialMediaButton key={item.name} item={item} />
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

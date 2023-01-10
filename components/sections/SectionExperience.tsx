import { experienceContent } from "../../constants";
import BtnScroll from "../shared-ui/BtnScroll";
import Timeline from "../Timeline";

const SectionExperience = () => {
	const { title, timeline } = experienceContent;
	return (
		<section
			id="experience"
			className="container lg:mx-auto grid lg:min-h-screen p-4 py-10 xl:py-20 lg:px-20"
		>
			<div className="grid self-start" />
			<div className="grid self-center">
				<h1 className="text-pw-orange font-spartanBold text-2xl xl:text-3xl mb-4 xl:mb-8 text-center md:text-left col-span-12">
					{title}
				</h1>
				<div className="relative col-span-12 px-0 md:px-4 space-y-6 sm:col-span-9">
					<div className="col-span-12 space-y-6 lg:space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-pw-blue">
						{timeline.map((item) => (
							<Timeline item={item} key={item.id + item.company} />
						))}
					</div>
				</div>
			</div>
			<div className="hidden lg:grid self-end">
				<BtnScroll />
			</div>
		</section>
	);
};

export default SectionExperience;

import { Experience } from "../../constants/Experience";
import BtnScroll from "../shared-ui/BtnScroll";

const SectionExperience = () => {
	return (
		<section
			id="experience"
			className="container lg:mx-auto grid lg:min-h-screen p-4 py-10 xl:py-20 xl:px-20"
		>
			<div className="grid self-start" />
			<div className="grid self-center">
				<h5 className="text-pw-orange font-spartanBold text-2xl xl:text-3xl mb-4 xl:mb-8 text-center lg:text-left  w-full">
					Over 2 years experience.
				</h5>
				<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
					<div className="col-span-12 space-y-6 lg:space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-pw-blue">
						{Experience.map((item) => (
							<div
								key={item.id + item.company}
								className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pw-blue"
							>
								<h3 className="text-base lg:text-xl font-spartanBold text-pw-blue">
									{item.title}
								</h3>
								<h5 className="text-xl lg:text-xl font-spartanBold text-pw-orange my-2">
									{item.company}
								</h5>
								<time className=" text-sm lg:text-base font-spartanSemiBold text-pw-blue">
									{item.startDate} -{" "}
									{item.endDate === null ? "present" : item.endDate}
								</time>
							</div>
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

export default SectionExperience

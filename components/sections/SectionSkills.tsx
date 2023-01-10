import { Tab } from "@headlessui/react";
import { SkillsContent } from "../../constants/SkillsContent";
import BtnScroll from "../shared-ui/BtnScroll";

const SectionSkills = () => {
	const classNames = (...classes: any[]) => {
		return classes.filter(Boolean).join(" ");
	};

	const { title, description, expertise } = SkillsContent;

	return (
		<section
			id="skills"
			className="container mx-auto grid lg:h-screen md:px-4 xl:py-20 lg:px-20"
		>
			<div className="grid lg:grid-cols-2 gap-x-14">
				<div className="md:grid md:grid-cols-2 md:gap-x-4 lg:block">
					<div className="md:grid md:self-start lg:self-start">
						<h1 className="text-pw-orange font-spartanBold text-2xl xl:text-3xl mx-4 md:mx-0 xl:mb-8 text-center md:text-left">
							{title}
						</h1>
						<p className="text-pw-blue font-spartanRegular text-base xl:text-2xl px-4 md:px-0 text-center md:text-left">
							{description}
						</p>
					</div>
					<div className="w-full mx-auto py-8 md:py-4 px-4 sm:px-0">
						<Tab.Group>
							<Tab.List className="flex space-x-1 rounded bg-pw-blue p-1">
								{expertise.map((category) => (
									<Tab
										key={category.id}
										className={({ selected }) =>
											classNames(
												"w-full rounded py-2.5 text-xs lg:text-sm font-medium font-spartanMedium",
												"ring-white ring-opacity-60 ring-offset-2 ring-offset-pw-orange focus:outline-none focus:ring-2",
												selected
													? "text-pw-orange bg-white shadow"
													: "text-pw-grey hover:bg-white/[0.12] hover:text-pw-orange"
											)
										}
									>
										{category.name}
									</Tab>
								))}
							</Tab.List>
							<Tab.Panels className="mt-3">
								{expertise.map((category) => (
									<Tab.Panel
										key={category.name}
										className={classNames(
											"rounded bg-white p-3 shadow-lg",
											"ring-white ring-opacity-60 border-2 border-pw-blue border-double ring-offset-2 ring-offset-pw-blue focus:outline-none focus:ring-2"
										)}
									>
										<div className="flex flex-wrap">
											{category.skills.map((item) => (
												<div
													key={item.id}
													className="relative rounded p-3 hover:bg-gray-100"
												>
													<img
														src={item.icon}
														className="w-10 h-10 mx-auto mb-2 animate-pulse"
														alt={item.name}
														loading="lazy"
													/>
													<h2 className="text-xs lg:text-sm font-spartanSemiBold text-pw-blue text-center">
														{item.name}
													</h2>
													<a
														href="#"
														className={classNames(
															"absolute inset-0 rounded-md",
															"ring-pw-orange focus:z-10 focus:outline-none focus:ring-2"
														)}
														aria-label={item.name}
													/>
												</div>
											))}
										</div>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>
					</div>
				</div>
				<div className="relative hidden lg:grid self-center">
					<img
						src="/images/net-bg.svg"
						alt="net-bg"
						className="animate-pulse  ml-auto -top-9 right-0 xl:-right-9 absolute"
						loading="lazy"
					/>
					<div className="relative grayscale">
						<img
							className="max-w-xs lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[40vh] xl:h-[70vh] xl:ml-auto"
							src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
							alt="gif"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div className="hidden lg:grid self-end">
				<BtnScroll />
			</div>
		</section>
	);
};

export default SectionSkills;

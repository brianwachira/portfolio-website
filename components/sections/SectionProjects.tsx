// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { projectsContent } from "../../constants";
import Link from "next/link";
import BtnScroll from "../shared-ui/BtnScroll";

const SectionProjects = () => {
	const { title, projects } = projectsContent;
	return (
		<section
			id="projects"
			className="bg-white xl:bg-[url('/images/projects-bottom-image.svg')] bg-left bg-contain bg-no-repeat"
		>
			<main className="container md:mx-auto grid lg:min-h-screen px-4 py-4 md:px-0 md:py-10 xl:py-20 lg:px-20">
				<div className="grid self-start" />
				<h1 className="lg:hidden text-pw-orange font-spartanBold text-2xl lg:text-3xl lg:mb-6 text-center md:text-left md:px-4">
					{title}
				</h1>
				<Swiper
					slidesPerView={"auto"}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation
					pagination
					modules={[Navigation, Pagination]}
					className="w-full "
				>
					{projects.map((project) => (
						<SwiperSlide
							key={project.id}
							className="grid self-center md:grid-cols-2 gap-x-14 pt-6 lg:pt-12"
						>
							<div className="relative">
								<img
									src="/images/net-bg.svg"
									alt="net-bg"
									className="animate-pulse -top-9 absolute"
									loading="lazy"
								/>
								<div className="relative grayscale">
									<img
										className="mx-auto max-w-xs lg:max-w-sm xl:max-w-md  md:h-[30vh] lg:h-[70vh] lg:ml-auto xl:ml-9"
										src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0"
										alt="gif"
										loading="lazy"
									/>
								</div>
							</div>
							<div className="grid">
								<div className="grid self-center">
									<h1 className="hidden lg:block text-pw-orange font-spartanBold text-2xl lg:text-3xl mb-3 lg:mb-6 text-center lg:text-left">
										{title}
									</h1>
									<h2 className=" text-pw-orange font-spartanSemiBold text-xl my-3 lg:text-2xl lg:mb-6 text-center md:text-left">
										{project.title}
									</h2>
									<p className="text-pw-blue font-spartanRegular text-base lg:text-2xl mb-3 lg:mb-6 text-center md:text-left">
										{project.description}
									</p>
									<div className="flex flex-wrap mb-3 lg:mb-6 justify-center md:justify-start">
										{project.techStack.map((stack) => (
											<span
												key={stack.id}
												className="cursor-pointer py-2 px-3 bg-pw-grey text-sm font-spartanSemiBold text-white rounded mr-4 transition delay-150 duration-300 ease-in-out hover:bg-pw-orange mb-3 lg:mb-0"
											>
												{stack.stack}
											</span>
										))}
									</div>
									<div className="inline-flex justify-center md:justify-start">
										<Link
											href={project.githubLink}
											target="_blank"
											className={`${
												project.githubLink.length < 1 && "hidden"
											} "transition delay-150 duration-300 ease-in-out hover:scale-125"`}
										>
											<img
												src="/icons/github-filled.svg"
												alt="github link"
												className="mr-4"
												loading="lazy"
											/>
										</Link>
										<Link
											href={project.websiteLink}
											target="_blank"
											className={`${
												project.websiteLink.length < 1 && "hidden"
											} "transition delay-150 duration-300 ease-in-out hover:scale-125"`}
											aria-label="globe icon link"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="text-pw-grey w-[37px] h-[37px] mr-4"
												aria-label="globe icon"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
												/>
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="hidden lg:grid self-end">
					<BtnScroll light />
				</div>
			</main>
		</section>
	);
};

export default SectionProjects;

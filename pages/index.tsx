import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
import SectionProjects from "../components/sections/SectionProjects";
import SectionSkills from "../components/sections/SectionSkills";
import BtnScroll from "../components/shared-ui/BtnScroll";
import { Experience } from "../constants/Experience";
import { SocialMediaProfile } from "../constants/SocialMediaProfile";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hi, I am Brian Wachira</title>
				<meta name="description" content="I build for the world" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-[url('/images/landing-bg.svg')] -mt-28 bg-cover bg-no-repeat">
				<NavBar />
				<div className="container lg:mx-auto grid h-[calc(100vh)] mt-28">
					<div className="grid self-start"></div>
					<div className="mx-auto grid-self-center mt-36 xl:px-20 container">
						<h3 className=" font-spartanExtraBold text-4xl stroke-text">
							Brian Wachira
						</h3>
						<h5 className="font-spartanSemiBold text-2xl text-white my-4">
							Software Engineer
						</h5>
						<div className="inline-flex">
							{SocialMediaProfile.map((profile) => (
								<Link
									key={profile.name}
									href={profile.href}
									target="_blank"
									className="transition delay-150 duration-300 ease-in-out hover:scale-125"
								>
									<img
										src={profile.icon}
										alt={profile.name}
										className=" mr-4"
									/>
								</Link>
							))}
						</div>
					</div>
					<div className="grid self-end xl:px-20 container">
						<BtnScroll light/>
					</div>
				</div>
				<div
					id="about"
					className="container lg:mx-auto grid min-h-screen py-20 xl:px-20"
				>
					<div className="grid self-start"></div>

					<div className="grid self-center grid-cols-2 gap-x-14">
						<div className="relative">
							<img
								src="/images/net-bg.svg"
								alt="net-bg"
								className="animate-pulse -top-9 absolute"
							/>
							<div className="relative grayscale">
								<img
									className="max-w-md h-[70vh] ml-auto xl:ml-9"
									src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0"
									alt="gif"
								/>
							</div>
						</div>
						<div className="grid self-center">
							<h5 className="text-pw-orange font-spartanBold text-3xl mb-8">
								About Me.
							</h5>
							<p className="text-pw-blue font-spartanRegular text-2xl">
								With a passion for technology and a focus on continuous
								learning, I am a software engineer with expertise in JavaScript
								and a willingness to explore new technologies. I am a proactive
								problem-solver and enjoy working on complex projects that
								require me to think creatively and outside the box.
							</p>
						</div>
					</div>
					<div className="grid self-end">
						<BtnScroll/>
					</div>
				</div>
			</main>
			<main className="bg-[url('/images/experienceBackground.svg')] bg-right bg-cover bg-no-repeat">
				<div
					id="experience"
					className="container lg:mx-auto grid h-screen py-20 xl:px-20"
				>
					<div className="grid self-start" />
					<div className="grid self-center">
						<h5 className="text-pw-orange font-spartanBold text-3xl mb-8  w-full">
							Over 2 years experience.
						</h5>
						<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
							<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-pw-blue">
								{Experience.map((item) => (
									<div
										key={item.id + item.company}
										className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pw-blue"
									>
										<h3 className="text-xl font-spartanBold text-pw-blue">
											{item.title}
										</h3>
										<h5 className="text-2xl font-spartanBold text-pw-orange my-2">
											{item.company}
										</h5>
										<time className="text-base font-spartanSemiBold text-pw-blue">
											{item.startDate} -{" "}
											{item.endDate === null ? "present" : item.endDate}
										</time>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="grid self-end">
						<BtnScroll/>
					</div>
				</div>
				<SectionSkills/>
			</main>
			<main className="bg-[url('/images/projects-bottom-image.svg')] bg-left bg-contain bg-no-repeat">
				<SectionProjects/>
			</main>
		</>
	);
}

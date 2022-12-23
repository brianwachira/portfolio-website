import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
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
				<div className="container xl:mx-auto grid h-[calc(100vh)] mt-28">
					<div className="grid self-start"></div>
					<div className="mx-auto grid-self-center mt-36 lg:px-20 container">
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
					<div className="grid self-end lg:px-20 container">
						<div className="flex items-center my-8">
							<img
								src="/icons/arrow-down-icon.svg"
								alt="arrow-icon-down"
								className="animate-pulse mr-2"
							/>
							<span className=" text-xs font-spartanMedium text-pw-grey">
								Scroll
							</span>
						</div>
					</div>
				</div>
				<div id="about" className="container xl:mx-auto grid h-screen py-20 lg:px-20">
					<div className="grid self-start"></div>

					<div className="grid self-center grid-cols-2 gap-x-28">
						<div className="relative">
							<img
								src="/images/net-bg.svg"
								alt="net-bg"
								className="animate-pulse -top-9 absolute"
							/>
							<div className="relative grayscale pl-9">
								<img
									className="max-w-md h-[653px] mr-auto"
									src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
									alt="gif"
								/>
							</div>
						</div>
						<div className="pl-9 grid self-center">
							<h5 className="text-pw-orange font-spartanBold text-3xl mb-8">
								About Me.
							</h5>
							<p className="text-pw-blue font-spartanRegular text-2xl -mr-9">
								With a passion for technology and a focus on continuous
								learning, I am a software engineer with expertise in JavaScript
								and a willingness to explore new technologies. I am a proactive
								problem-solver and enjoy working on complex projects that
								require me to think creatively and outside the box.
							</p>
						</div>
					</div>
					<div className="grid self-end">
						<div className="flex items-center my-8">
							<img
								src="/icons/arrow-down-blue-icon.svg"
								alt="arrow-icon-down"
								className="animate-pulse mr-2"
							/>
							<span className=" text-xs font-spartanMedium text-pw-blue">
								Scroll
							</span>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

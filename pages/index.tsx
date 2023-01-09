import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionAbout from "../components/sections/SectionAbout";
import SectionContact from "../components/sections/SectionContact";
import SectionExperience from "../components/sections/SectionExperience";
import SectionLanding from "../components/sections/SectionLanding";
import SectionProjects from "../components/sections/SectionProjects";
import SectionSkills from "../components/sections/SectionSkills";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hi, I am Brian Wachira</title>
				<meta property="title" content="Hi, I am Brian Wachira"/>
				<meta property="og:title" content="Hi, I am Brian Wachira"/>
				<meta property="twitter:title" content="Hi, I am Brian Wachira"/>
				<meta name="description" content="I build for the world" />
				<meta name="og:description" content="I build for the world" />
				<meta name="twitter:description" content="I build for the world" />
				<meta property="image" content="/images/code@3x.png"/>
				<meta property="og:image" content="/images/code@3x.png"/>
				<meta property="twitter:image" content="/images/code@3x.png"/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-pw-blue lg:bg-white  lg:bg-[url('/images/landing-bg.svg')] -mt-28 bg-cover bg-no-repeat">
				<NavBar />
				<SectionLanding/>
				<SectionAbout/>
			</main>
			<main className="lg:bg-[url('/images/experienceBackground.svg')] bg-right bg-cover bg-no-repeat">
				<SectionExperience/>
				<SectionSkills />
			</main>
			<SectionProjects />
			<SectionContact />
			<Footer />
		</>
	);
}

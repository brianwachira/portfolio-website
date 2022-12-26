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
				<meta name="description" content="I build for the world" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-[url('/images/landing-bg.svg')] -mt-28 bg-cover bg-no-repeat">
				<NavBar />
				<SectionLanding/>
				<SectionAbout/>
			</main>
			<main className="bg-[url('/images/experienceBackground.svg')] bg-right bg-cover bg-no-repeat">
				<SectionExperience/>
				<SectionSkills />
			</main>
			<SectionProjects />
			<SectionContact />
			<Footer />
		</>
	);
}

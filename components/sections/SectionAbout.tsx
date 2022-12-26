import BtnScroll from "../shared-ui/BtnScroll";

const SectionAbout = () => {
	return (
		<section
			id="about"
			className=" snap-y container lg:mx-auto grid min-h-screen py-20 xl:px-20"
		>
			<div className="grid self-start"></div>

			<div className=" snap-center grid self-center grid-cols-2 gap-x-14">
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
						With a passion for technology and a focus on continuous learning, I
						am a software engineer with expertise in JavaScript and a
						willingness to explore new technologies. I am a proactive
						problem-solver and enjoy working on complex projects that require me
						to think creatively and outside the box.
					</p>
				</div>
			</div>
			<div className="grid self-end">
				<BtnScroll />
			</div>
		</section>
	);
};

export default SectionAbout;

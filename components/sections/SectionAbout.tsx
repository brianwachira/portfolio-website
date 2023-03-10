import BtnScroll from "../shared-ui/BtnScroll";
import { aboutContent } from "../../constants";

const SectionAbout = () => {
	const { title, description } = aboutContent;
	return (
		<section
			id="about"
			className=" snap-y container lg:mx-auto grid lg:min-h-screen xl:py-20 lg:px-20"
		>
			<div className="grid self-start"></div>

			<div className=" snap-center grid self-center md:grid-cols-2 lg:grid-cols-2 lg:gap-x-14">
				<div className="relative order-last md:order-1">
					<img
						src="/images/net-bg.svg"
						alt="net-bg"
						className="animate-pulse -top-9 absolute"
						loading="lazy"
					/>
					<div className="relative grayscale">
						<img
							className="max-w-xs mx-auto lg:max-w-sm xl:max-w-md md:h-[30vh] lg:h-[40vh] xl:h-[70vh] lg:ml-auto xl:ml-9"
							src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03fdb466-60c7-4df2-8aeb-8f9f008d2afa/db8o23g-c69fffc4-ad01-4d0a-8add-832de1a26de7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzZmRiNDY2LTYwYzctNGRmMi04YWViLThmOWYwMDhkMmFmYVwvZGI4bzIzZy1jNjlmZmZjNC1hZDAxLTRkMGEtOGFkZC04MzJkZTFhMjZkZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u2KXFJm5O_QWDqHAScT-QTWe_pwrUaCubl4UMxl1Gw0"
							alt="gif"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="grid self-center mb-14 md:order-2">
					<h1 className="text-pw-orange font-spartanBold text-2xl xl:text-3xl mb-4 xl:mb-8 text-center md:text-left">
						{title}
					</h1>
					<p className="text-pw-grey lg:text-pw-blue font-spartanRegular text-base xl:text-2xl px-4 md:py-0 md:pl-0 lg:pr-0 text-center md:text-left">
						{description}
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

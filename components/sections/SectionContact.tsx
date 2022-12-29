const SectionContact = () => {
	return (
		<section
			id="contact"
			className="bg-[url('/images/contactus-background.svg')] bg-cover p-4 lg:py-20 lg:px-20"
		>
			<main className="bg-white container md:mx-auto grid rounded">
				<div className="p-4 lg:p-9 grid lg:grid-cols-2 gap-x-14">
					<div className="grid self-center">
						<h5 className=" font-spartanSemiBold text-pw-blue text-2xl lg:text-4xl mb-2 lg:mb-0 text-center lg:text-left">
							Drop me a message,
							<br />I would love to hear from you!
						</h5>
					</div>
					<form className=" space-y-6">
						<h5 className=" font-spartanBold text-pw-orange text-2xl xl:text-3xl mb-4 xl:mb-8 text-center lg:text-left">
							Get in touch
						</h5>
						<div className="relative">
							<input
								type="text"
								id="name"
								className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
								placeholder=" "
							/>
							<label
								htmlFor="name"
								className="absolute  text-base lg:text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
							>
								Name
							</label>
						</div>
						<div className="relative">
							<input
								type="text"
								id="email"
								className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
								placeholder=" "
							/>
							<label
								htmlFor="email"
								className="absolute  text-base lg:text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
							>
								Email
							</label>
						</div>
						<div className="relative">
							<textarea
								className="block px-2.5 py-2.5 w-full text-base lg:text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
								placeholder=" "
							/>
							<label
								htmlFor="email"
								className="absolute  text-base lg:text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
							>
								Message
							</label>
						</div>
						<div className="flex justify-center lg:justify-start">
							<button className=" py-4 px-6 bg-pw-blue text-white font-spartanMedium text-sm lg:text-base rounded  transition delay-150 duration-300 ease-in-out hover:bg-pw-orange ring-pw-orange ring-opacity-60 ring-offset-2 ring-offset-pw-blue focus:outline-none focus:ring-2">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</main>
		</section>
	);
};

export default SectionContact;

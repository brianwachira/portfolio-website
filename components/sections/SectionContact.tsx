const SectionContact = () => {
	return (
		<section
			id="contact"
			className="bg-white container lg:mx-auto grid rounded"
		>
			<div className="p-9 grid grid-cols-2 gap-x-14">
				<div className="grid self-center">
					<h5 className=" font-spartanSemiBold text-pw-blue text-4xl">
                        Drop me a message,<br/>
						I would love to hear from you!
					</h5>
				</div>
				<form className=" space-y-6">
					<h5 className=" font-spartanBold text-pw-orange text-3xl">
						Get in touch
					</h5>
					<div className="relative">
						<input
							type="text"
							id="name"
							className="block px-2.5 py-2.5 w-full text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
							placeholder=" "
						/>
						<label
							htmlFor="name"
							className="absolute  text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
						>
							Name
						</label>
					</div>
					<div className="relative">
						<input
							type="text"
							id="email"
							className="block px-2.5 py-2.5 w-full text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
							placeholder=" "
						/>
						<label
							htmlFor="email"
							className="absolute  text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
						>
							Email
						</label>
					</div>
					<div className="relative">
						<textarea
							className="block px-2.5 py-2.5 w-full text-xl text-pw-blue bg-transparent rounded border border-pw-blue appearance-none focus:outline-none focus:ring-0 focus:border-pw-orange peer"
							placeholder=" "
						/>
						<label
							htmlFor="email"
							className="absolute  text-xl text-pw-grey font-spartanRegular duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-pw-orange peer-focus:dark:text-pw-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
						>
							Message
						</label>
					</div>
					<button className=" py-4 px-6 bg-pw-blue text-white font-spartanMedium text-base rounded">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default SectionContact;

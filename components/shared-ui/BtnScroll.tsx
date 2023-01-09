interface IBtnScrollProps {
	light?: boolean;
}
const BtnScroll = (props: IBtnScrollProps) => {
	const { light } = props;

	return (
		<>
            {light ? 
            <>
            <div className="flex justify-center lg:justify-start items-center my-8">
                <img
                    src="/icons/arrow-down-icon.svg"
                    alt="arrow-icon-down"
                    className="animate-pulse mr-2"
					loading="lazy"
                />
                <span className=" text-xs font-spartanMedium text-pw-grey">
                    Scroll
                </span>
            </div></>:<>
			<div className="flex justify-center lg:justify-start items-center my-4 lg:my-8">
				<img
					src="/icons/arrow-down-blue-icon.svg"
					alt="arrow-icon-down"
					className="animate-pulse mr-2"
					loading="lazy"
				/>
				<span className=" text-xs font-spartanMedium text-pw-blue">Scroll</span>
			</div></>}
		</>
	);
};

export default BtnScroll;

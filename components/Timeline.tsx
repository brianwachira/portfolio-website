interface ITimelineProps {
	item:
		| {
				id: number;
				title: string;
				company: string;
				startDate: string;
				endDate: null;
				currentWorkplace: boolean;
		  }
		| {
				id: number;
				title: string;
				company: string;
				startDate: string;
				endDate: string;
				currentWorkplace: boolean;
		  };
}

const Timeline = (props: ITimelineProps) => {
	const { item } = props;

	return (
		<div
			key={item.id + item.company}
			className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pw-blue"
		>
			<h2 className="text-base lg:text-xl font-spartanBold text-pw-blue">
				{item.title}
			</h2>
			<h3 className="text-xl lg:text-xl font-spartanBold text-pw-orange my-2">
				{item.company}
			</h3>
			<time className=" text-sm lg:text-base font-spartanSemiBold text-pw-blue">
				{item.startDate} - {item.endDate === null ? "present" : item.endDate}
			</time>
		</div>
	);
};

export default Timeline;

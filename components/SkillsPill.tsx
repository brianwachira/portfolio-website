interface ISkillsPillProps {
	item: {
		id: number;
		name: string;
		icon: string;
	};
}

const SkillsPill = (props: ISkillsPillProps) => {
	const { item } = props;

	const classNames = (...classes: any[]) => {
		return classes.filter(Boolean).join(" ");
	};

	return (
		<div key={item.id} className="relative rounded p-3 hover:bg-gray-100">
			<img
				src={item.icon}
				className="w-10 h-10 mx-auto mb-2 animate-pulse"
				alt={item.name}
				loading="lazy"
			/>
			<h2 className="text-xs lg:text-sm font-spartanSemiBold text-pw-blue text-center">
				{item.name}
			</h2>
			<a
				href="#"
				className={classNames(
					"absolute inset-0 rounded-md",
					"ring-pw-orange focus:z-10 focus:outline-none focus:ring-2"
				)}
				aria-label={item.name}
			/>
		</div>
	);
};

export default SkillsPill;

import Link from "next/link";

interface ISocialMediaButtonProps {
	item: {
		name: string;
		href: string;
		icon: string;
	};
}

const SocialMediaButton = (props: ISocialMediaButtonProps) => {
	const { item } = props;

	return (
		<Link
			key={item.name}
			href={item.href}
			target="_blank"
			className="transition delay-150 duration-300 ease-in-out hover:scale-125"
		>
			<img src={item.icon} alt={item.name} className=" mr-4" loading="lazy" />
		</Link>
	);
};

export default SocialMediaButton;

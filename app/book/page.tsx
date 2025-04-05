import SelectCard from "../components/SelectCard";

type ProfileType = {
	top: string;
};

const page = () => {
	const data: ProfileType = {
		top: "Y",
	};

	return (
		<>
			{/* pass data in select card */}
			<SelectCard {...data} />
		</>
	);
};

export default page;

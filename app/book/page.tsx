import HotelCard from "../components/HotelCard";

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
			{/* <SelectCard {...data} /> */}

			<HotelCard
				discount="-10%"
				network={4}
				family={8}
				isAd={true}
				title="Best Western Cedars Hotel"
				beds={6}
				baths={3}
				area="1200"
				rating={4.8}
				reviewCount={28}
				price="$26,000"
			/>
		</>
	);
};

export default page;

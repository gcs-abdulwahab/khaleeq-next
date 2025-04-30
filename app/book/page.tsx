import HotelCard from "../components/HotelCard";



	


const page = () => {
	return (
		<div className="flex flex-col gap-4 p-4 mx-auto">
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
		</div>
	);
};

export default page;

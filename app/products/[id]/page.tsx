// import products

import products from "@/app/data/products";
interface PageProps {
	params: {
		id: string;
	};
}

const Page = ({ params }: PageProps) => {
	const { id } = params;

	const product = products.find((product) => product.id === Number(id));
	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div>
			<h1>Product Detail Page</h1>
            <p>Product id: {product.id}</p>
            <p>Product name: {product.name}</p>
		</div>
	);
};

export default Page;

import Link from "next/link";
// get products
const res = await fetch("http://localhost:3000/api/products");
const products = await res.json();

const page = () => {
	return (
		<div className="flex flex-wrap justify-center gap-8 w-full bg-green-200 p-4">
			{products.map((product: any) => (
				<div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
					<h2 className="text-lg font-bold">{product.name}</h2>
					<p className="text-gray-700">{product.description}</p>
					<span className="text-green-600">${product.price}</span>
					{/* link to detail */}
					<Link
						href={`/products/${product.id}`}
						className="text-blue-500 underline"
					>
						View Details
					</Link>
				</div>
			))}
		</div>
	);
};

export default page;

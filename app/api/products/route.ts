const products = [
	{
		id: 1,
		name: "Product 1",
		price: 100,
	},
	{
		id: 2,
		name: "Product 2",
		price: 200,
	},
	{
		id: 3,
		name: "Product 3",
		price: 300,
	},
	{
		id: 4,
		name: "Product 4",
		price: 400,
	},
];

export async function GET() {
	return new Response(JSON.stringify(products), {
		headers: { "Content-Type": "application/json" },
	});
}

export async function POST(req: Request) {
	const data = await req.json();
	const newProduct = {
		id: products.length + 1,
		name: data.name,
		price: data.price,
	};
	products.push(newProduct);
	return new Response(JSON.stringify(newProduct), {
		headers: { "Content-Type": "application/json" },
	});
}
export async function PUT(req: Request) {
	const data = await req.json();
	const productId = data.id;
	const productIndex = products.findIndex(
		(product) => product.id === productId
	);
	if (productIndex === -1) {
		return new Response("Product not found", { status: 404 });
	}
	products[productIndex] = { ...products[productIndex], ...data };
	return new Response(JSON.stringify(products[productIndex]), {
		headers: { "Content-Type": "application/json" },
	});
}
export async function DELETE(req: Request) {
	const data = await req.json();
	const productId = data.id;
	const productIndex = products.findIndex(
		(product) => product.id === productId
	);
	if (productIndex === -1) {
		return new Response("Product not found", { status: 404 });
	}
	products.splice(productIndex, 1);
	return new Response(
		JSON.stringify({ message: "Product deleted successfully" }),
		{
			headers: { "Content-Type": "application/json" },
		}
	);
}

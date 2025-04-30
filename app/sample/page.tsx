import { addProduct } from './actions/products';

export interface Product {
  id: number;
  name: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function SamplePage() {            
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      
      {/* Add Product Form */}
      <form action={addProduct} className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Product
        </button>
      </form>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

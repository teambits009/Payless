import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image src={product.image_url} alt={product.name} width={200} height={200} className="mx-auto" />
      <h3 className="text-lg font-semibold text-gray-900 mt-4">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <Link
        href={`/checkout?productId=${product.id}`}
        className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700"
      >
        Buy Now, Pay Later
      </Link>
    </div>
  );
}
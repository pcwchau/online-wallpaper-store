import { getProduct } from "@/api/api";
import Image from "next/image";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const product = await getProduct(parseInt(productId));

  return (
    <div>
      <h1>Product Details</h1>
      <p className="h-[140rem]">Product ID: {product.id}</p>
      <Image
        src={product.imageUrl[0]}
        alt={product.name}
        width={200}
        height={200}
      />
      <p>{product.name}</p>
    </div>
  );
};

export default ProductDetailsPage;

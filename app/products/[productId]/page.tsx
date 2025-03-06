import { getProduct } from "@/api/api";

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
    </div>
  );
};

export default ProductDetailsPage;

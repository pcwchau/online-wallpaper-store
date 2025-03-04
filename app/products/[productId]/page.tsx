const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetailsPage;

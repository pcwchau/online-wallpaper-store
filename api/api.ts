import { Product } from "@/types/apiResponseType";

export const getProduct = async (productId: number): Promise<Product> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    id: productId,
    name: "Product 1",
    price: 100,
    priceUnit: "SF",
    category: 1,
    imageUrl: ["/temp-image/1.jpg", "/temp-image/1-01.jpg"],
  };
};

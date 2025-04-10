import { Product } from "@/types/apiResponseType";

// Response within timeout: response
// Response after timeout: undefined
// Error within timeout: undefined
const GETRequestWithTimeout = async (
  url: string,
  options?: RequestInit,
  timeout: number = 5000
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return response;
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      console.error("Fetch request timed out");
    } else {
      console.error("Error fetching image URLs:", err);
    }
  }
};

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

export const getImagesFromS3 = async (s3Folder: string): Promise<string[]> => {
  const url = `${
    process.env.NEXT_PUBLIC_BACKEND_URL
  }/images?folder=${encodeURIComponent(s3Folder)}`;
  const response = await GETRequestWithTimeout(url);

  if (response !== undefined && response.ok) {
    const data = await response.json();
    return data.images;
  } else {
    return [];
  }
};

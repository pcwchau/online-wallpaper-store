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
        ...(options?.headers || {}),
      },
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return response;
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      console.error("GET request timed out");
    } else {
      console.error("GET request error: ", err);
    }
  }
};

// Response within timeout: response
// Response after timeout: undefined
// Error within timeout: undefined
const POSTRequestWithTimeout = async (
  url: string,
  body: unknown,
  options?: RequestInit,
  timeout: number = 5000
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const isFormData = body instanceof FormData;

    const response = await fetch(url, {
      method: "POST",
      headers: isFormData
        ? options?.headers || {}
        : {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
          },
      body: isFormData ? body : JSON.stringify(body),
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return response;
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      console.error("POST request timed out");
    } else {
      console.error("POST request error: ", err);
    }
  }
};

export const uploadInspirationImages = async (files: File[]) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/inspiration/upload`;
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("images", file);
  });
  const response = await POSTRequestWithTimeout(
    url,
    formData,
    undefined,
    30000
  );

  if (response !== undefined && response.ok) {
    const data = await response.json();
    return data.message;
  } else {
    return undefined;
  }
};

export const getInspirationImages = async (
  page: number,
  limit: number
): Promise<{ title: string; image_url: string }[]> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/inspiration/get?page=${page}&limit=${limit}`;
  const response = await GETRequestWithTimeout(url);

  if (response !== undefined && response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return [];
  }
};

export const getInspirationImageCount = async (): Promise<number> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/inspiration/getCount`;
  const response = await GETRequestWithTimeout(url);

  if (response !== undefined && response.ok) {
    const data = await response.json();
    return data.data.count;
  } else {
    return 0;
  }
};

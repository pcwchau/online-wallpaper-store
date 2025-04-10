export const getFileNameFromUrl = (
  url: string,
  withExtension: boolean = true
) => {
  try {
    // Create a URL object to easily access its pathname
    const urlObject = new URL(url);
    const pathname = urlObject.pathname;

    // Extract the filename from the pathname
    const fileNameWithExtension = pathname.substring(
      pathname.lastIndexOf("/") + 1
    );

    if (!withExtension) {
      // Remove the extension if it's not needed
      const fileNameWithoutExtension = fileNameWithExtension.split(".")[0];
      return fileNameWithoutExtension;
    }

    return fileNameWithExtension; // Return with extension
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
};

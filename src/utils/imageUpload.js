// Compress employee photos before saving them to browser storage.
export const resizePhoto = (file) => {
  return new Promise((resolve, reject) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!file || !allowedTypes.includes(file.type)) {
      reject(new Error("Please choose a JPG, PNG or WebP photo."));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      reject(new Error("Choose a photo smaller than 5 MB."));
      return;
    }

    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      try {
        const maxWidth = 480;
        const scale = Math.min(1, maxWidth / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Your browser could not process this photo.");
        }

        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        const result = canvas.toDataURL("image/jpeg", 0.73);
        if (result.length > 260000) {
          throw new Error("This photo is still too large; try another.");
        }

        resolve(result);
      } catch (error) {
        reject(error);
      } finally {
        URL.revokeObjectURL(url);
      }
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Photo could not be opened."));
    };

    image.src = url;
  });
};

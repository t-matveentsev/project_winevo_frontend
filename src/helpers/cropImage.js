// helpers/cropImage.js
export default async function cropImage(
  imageSrc,
  crop, // { x, y, width, height } з react-easy-crop -> onCropComplete
  quality = 0.9,
  type = "image/webp"
) {
  const image = await createImage(imageSrc);

  // готуємо "чисте" полотно під розмір кропу
  const sx = Math.round(crop.x);
  const sy = Math.round(crop.y);
  const sw = Math.round(crop.width);
  const sh = Math.round(crop.height);

  const canvas = document.createElement("canvas");
  canvas.width = sw;
  canvas.height = sh;
  const ctx = canvas.getContext("2d");

  // просто вирізаємо потрібний прямокутник з оригіналу
  ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);

  const blob = await new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b), type, quality)
  );
  if (!blob) throw new Error("Failed to create image blob");

  const file = new File(
    [blob],
    `thumb-${Date.now()}.${type.includes("webp") ? "webp" : "png"}`,
    { type }
  );
  const url = URL.createObjectURL(blob);

  return { blob, file, url };
}

// допоміжна — завантажити зображення
function createImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

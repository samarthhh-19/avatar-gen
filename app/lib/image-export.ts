"use client";

/**
 * Takes the avatar preview DOM element, clones it,
 * cleans styling, scales it, and prepares for image export.
 */
export const prepareExportContainer = (element: HTMLElement) => {
  const temp = document.createElement("div");

  temp.style.position = "fixed";
  temp.style.left = "-9999px";
  temp.style.top = "0";
  temp.style.zIndex = "-1";
  temp.style.width = "1024px";
  temp.style.height = "1024px";
  temp.style.overflow = "hidden";

  const clone = element.cloneNode(true) as HTMLElement;

  clone.style.width = "1024px";
  clone.style.height = "1024px";
  clone.style.maxWidth = "none";
  clone.style.maxHeight = "none";
  clone.style.borderRadius = "0";

  temp.appendChild(clone);
  document.body.appendChild(temp);

  return temp;
};

/**
 * Applies background color, clipping (circle/square), and draws PNG.
 */
export const renderFinalPng = async (
  img: HTMLImageElement,
  isCircle: boolean,
  bgColor: string | null
) => {
  const canvas = document.createElement("canvas");
  const size = 1024;

  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, size, size);

  if (bgColor) {
    ctx.fillStyle = bgColor;

    if (isCircle) {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, size, size);
    }
  }

  if (isCircle) {
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.clip();
  }

  ctx.drawImage(img, 0, 0, size, size);

  return canvas.toDataURL("image/png");
};

/**
 * Triggers a browser download for PNG or SVG files.
 */
export const downloadFile = (url: string, filename: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
};

"use client";

import { toPng } from "html-to-image";
import { AvatarSelections } from "../types";
import {
  prepareExportContainer,
  renderFinalPng,
  downloadFile,
} from "../lib/image-export";
import { useAvatarContainer } from "./useAvatarContainer";
import { useBackgroundOptions } from "./useBackgroundOptions";

export const useAvatarExport = (selections: AvatarSelections) => {
  const { findAvatarContainer, isCircular } = useAvatarContainer();
  const { getBackgroundColor } = useBackgroundOptions(selections);

  const exportAsPng = async () => {
    const element = findAvatarContainer();
    if (!element) return;

    const tempContainer = prepareExportContainer(element);
    const clone = tempContainer.firstChild as HTMLElement;

    const dataURL = await toPng(clone, {
      pixelRatio: 3,
      width: 1024,
      height: 1024,
      backgroundColor: undefined,
    });

    document.body.removeChild(tempContainer);

    const img = new Image();
    img.src = dataURL;

    await new Promise((resolve) => (img.onload = resolve));

    const finalURL = await renderFinalPng(
      img,
      isCircular(element),
      getBackgroundColor()
    );

    downloadFile(finalURL, "avatar.png");
  };

  const exportAsSvg = async () => {
    const element = findAvatarContainer();
    if (!element) return;

    const tempContainer = prepareExportContainer(element);
    const clone = tempContainer.firstChild as HTMLElement;

    const pngData = await toPng(clone, {
      pixelRatio: 3,
      width: 1024,
      height: 1024,
    });

    document.body.removeChild(tempContainer);

    const svg = `
      <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
        <image href="${pngData}" width="1024" height="1024"/>
      </svg>
    `;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    downloadFile(url, "avatar.svg");
    URL.revokeObjectURL(url);
  };

  return { exportAsPng, exportAsSvg };
};

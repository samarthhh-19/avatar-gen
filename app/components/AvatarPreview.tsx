"use client";

import { AvatarSelections, PreviewShape } from "../types";
import { cn } from "../utils/cn";

interface Props {
  selections: AvatarSelections;
  bgColor: string | null;
  shape: PreviewShape;
}

export default function AvatarPreview({ selections, bgColor, shape }: Props) {
  return (
    <div
      data-avatar-container
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        shape === "circle" ? "rounded-full" : "rounded-xl"
      )}
      style={{
        backgroundColor: bgColor || "transparent",
        width: "256px",
        height: "256px",
        minWidth: "256px",
        minHeight: "256px",
        maxWidth: "256px",
        maxHeight: "256px",
      }}
    >
      {/* Background */}
      {selections.background && (
        <img
          src={`/avatar-parts/background/${selections.background}`}
          className="absolute inset-0 z-10 w-full h-full object-contain"
          alt="background"
        />
      )}

      {/* Outfit */}
      {selections.outfit && (
        <img
          src={`/avatar-parts/outfit/${selections.outfit}`}
          className="absolute z-20 w-full h-full object-cover"
          alt="outfit"
        />
      )}

      {/* Face */}
      {selections.face && (
        <img
          src={`/avatar-parts/face/${selections.face}`}
          className="absolute z-30 w-full h-full object-contain"
          alt="face"
        />
      )}

      {/* Eyes */}
      {selections.eyes && (
        <img
          src={`/avatar-parts/eyes/${selections.eyes}`}
          className="absolute z-40 w-full h-full object-contain"
          alt="eyes"
        />
      )}

      {/* Mouth */}
      {selections.mouth && (
        <img
          src={`/avatar-parts/mouth/${selections.mouth}`}
          className="absolute z-40 w-full h-full object-contain"
          alt="mouth"
        />
      )}

      {/* Hair */}
      {selections.hair && (
        <img
          src={`/avatar-parts/hair/${selections.hair}`}
          className="absolute z-50 w-full h-full object-contain"
          alt="hair"
        />
      )}

      {/* Accessories */}
      {selections.accessories && (
        <img
          src={`/avatar-parts/accessories/${selections.accessories}`}
          className="absolute z-60 w-full h-full object-contain"
          alt="accessories"
        />
      )}
    </div>
  );
}

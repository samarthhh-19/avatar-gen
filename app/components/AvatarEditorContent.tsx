"use client";

import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useAvatar } from "../context/AvatarContext";
import AvatarPreview from "./AvatarPreview";
import { useAvatarExport } from "../hooks/useAvatarExport";
import CategoryTabs from "./CategoryTabs";
import { CategoryType } from "../types";

interface Props {
  selections: any;
  previewShape: "circle" | "square";
  setPreviewShape: (shape: "circle" | "square") => void;
  updateBackgroundColor: (color: string | null) => void;
  generateRandomAvatar: () => void;
  selectedCategory: CategoryType;
  onSelectCategory: (value: CategoryType) => void;
  onSelectItem?: (item: string) => void;
}

const AvatarEditorContent = React.memo(function AvatarEditorContent({
  selections,
  previewShape,
  setPreviewShape,
  updateBackgroundColor,
  generateRandomAvatar,
  selectedCategory,
  onSelectCategory,
}: Props) {
  const { bgColor } = useAvatar();
  const { exportAsPng, exportAsSvg } = useAvatarExport(selections);

  const colors = useMemo(
    () => [
      "#FFFFFF",
      "#FEE2E2",
      "#FCCFCC",
      "#FDE68A",
      "#FEF3C7",
      "#DCFCE7",
      "#DBEAFE",
      "#E9D5FF",
      "#FFE4E6",
      "#E2E8F0",
    ],
    []
  );

  return (
    <div className="w-full">
      <div className="grid gap-6 md:grid-cols-3 items-start">
        {/* Left: Preview */}
        <div className="md:col-span-1 flex items-center justify-center border rounded-md bg-white p-8">
          <AvatarPreview
            selections={selections}
            shape={previewShape}
            bgColor={bgColor}
          />
        </div>

        {/* Right: Controls */}
        <div className="md:col-span-2 p-4 bg-white border rounded-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button
                variant={previewShape === "circle" ? "default" : "ghost"}
                onClick={() => setPreviewShape("circle")}
              >
                Circle
              </Button>
              <Button
                variant={previewShape === "square" ? "default" : "ghost"}
                onClick={() => setPreviewShape("square")}
              >
                Square
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={() => generateRandomAvatar()}>Random</Button>
            </div>
          </div>

          {/* Background color strip (after shape controls) */}
          <div className="my-4">
            <div className="text-sm font-medium mb-2">Background</div>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() =>
                    updateBackgroundColor(c === "#FFFFFF" ? null : c)
                  }
                  aria-label={`Set background ${c}`}
                  className={`w-8 h-8 rounded-sm border ${
                    bgColor === c || (c === "#FFFFFF" && !bgColor)
                      ? "ring-2 ring-offset-1 ring-primary"
                      : "border-muted"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Category strip (below background) */}
          <div className="my-6">
            <CategoryTabs
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          </div>

          {/* Export buttons (below category tabs) */}
          <div className="w-full flex items-center justify-center">
            {/* <div className="text-sm font-medium mb-2">Export</div> */}
            <div className="flex flex-wrap gap-2 items-center my-4 mt-5">
              <button
                onClick={() => exportAsPng()}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Export PNG
              </button>
              <button
                onClick={() => exportAsSvg()}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Export SVG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AvatarEditorContent;

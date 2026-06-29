"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AvatarSelections, CategoryType, PreviewShape } from "../types";

type AvatarContextType = {
  selections: AvatarSelections;
  updateSelection: (category: CategoryType, value: string) => void;
  updateBackgroundColor: (color: string | null) => void;

  previewShape: PreviewShape;
  setPreviewShape: (value: PreviewShape) => void;

  bgColor: string | null;

  generateRandomAvatar: () => void;
};

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export const AvatarProvider = ({ children }: { children: ReactNode }) => {
  const [selections, setSelections] = useState<AvatarSelections>({
    face: null,
    hair: null,
    eyes: null,
    mouth: null,
    accessories: null,
    outfit: null,
    background: null,
  });

  const [bgColor, setBgColor] = useState<string | null>(null);

  const [previewShape, setPreviewShape] = useState<PreviewShape>("circle");

  const updateSelection = (category: CategoryType, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const updateBackgroundColor = (color: string | null) => {
    setBgColor(color);
  };

  const generateRandomAvatar = async () => {
    const categories: CategoryType[] = [
      "face",
      "hair",
      "eyes",
      "mouth",
      "accessories",
      "outfit",
    ];

    const newSelections: AvatarSelections = {
      face: null,
      hair: null,
      eyes: null,
      mouth: null,
      accessories: null,
      outfit: null,
      background: selections.background, // Keep current background selection
    };

    // Fetch and randomly select from each category
    for (const category of categories) {
      try {
        const response = await fetch(`/avatar-parts/${category}/index.json`);
        const items: string[] = await response.json();
        if (items && items.length > 0) {
          const randomIndex = Math.floor(Math.random() * items.length);
          newSelections[category] = items[randomIndex];
        }
      } catch (error) {
        console.error(`Failed to load ${category}:`, error);
      }
    }

    setSelections(newSelections);

    const colors = ["#FEE2E2", "#DCFCE7", "#DBEAFE", "#FEF9C3", "#F3E8FF"];
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <AvatarContext.Provider
      value={{
        selections,
        updateSelection,
        updateBackgroundColor,
        previewShape,
        setPreviewShape,
        bgColor,
        generateRandomAvatar,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const ctx = useContext(AvatarContext);
  if (!ctx) throw new Error("useAvatar must be used inside AvatarProvider");
  return ctx;
};

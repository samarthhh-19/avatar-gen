"use client";

import { AvatarSelections } from "../types";
import { useAvatar } from "../context/AvatarContext";

export const useBackgroundOptions = (selections: AvatarSelections) => {
  const { bgColor } = useAvatar();

  const getBackgroundColor = () => {
    return bgColor || null;
  };

  return { getBackgroundColor };
};

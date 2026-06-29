"use client";

export const useAvatarContainer = () => {
  const findAvatarContainer = () => {
    return document.querySelector(
      "[data-avatar-container]"
    ) as HTMLElement | null;
  };

  const isCircular = (element: HTMLElement | null) => {
    if (!element) return false;
    return element.classList.contains("rounded-full");
  };

  return { findAvatarContainer, isCircular };
};

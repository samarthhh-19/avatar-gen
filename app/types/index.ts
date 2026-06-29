export type CategoryType =
  | "face"
  | "hair"
  | "eyes"
  | "mouth"
  | "accessories"
  | "outfit"
  | "background";

export type AvatarSelections = {
  face: string | null;
  hair: string | null;
  eyes: string | null;
  mouth: string | null;
  accessories: string | null;
  outfit: string | null;
  background: string | null;
};

export type PreviewShape = "circle" | "square";

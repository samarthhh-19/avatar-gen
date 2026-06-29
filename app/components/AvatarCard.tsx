"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CategoryType } from "../types";
import { useAvatar } from "../context/AvatarContext";
import AvatarEditorContent from "./AvatarEditorContent";
import ItemSelector from "./ItemSelector";

export default function AvatarCard() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("face");

  const {
    selections,
    updateSelection,
    updateBackgroundColor,
    previewShape,
    setPreviewShape,
    generateRandomAvatar,
  } = useAvatar();

  return (
    <Card className="overflow-hidden w-full max-w-full sm:max-w-4xl">
      <CardContent className="px-0 sm:px-6">
        <AvatarEditorContent
          selections={selections}
          previewShape={previewShape}
          setPreviewShape={setPreviewShape}
          updateBackgroundColor={updateBackgroundColor}
          generateRandomAvatar={generateRandomAvatar}
          selectedCategory={selectedCategory}
          onSelectCategory={(value) => setSelectedCategory(value)}
          onSelectItem={(item) => updateSelection(selectedCategory, item)}
        />
      </CardContent>

      <CardFooter className="p-4 sm:p-6 border-t">
        <ItemSelector
          category={selectedCategory}
          selectedItem={selections[selectedCategory]}
          onSelectItem={(item) => updateSelection(selectedCategory, item)}
        />
      </CardFooter>
    </Card>
  );
}

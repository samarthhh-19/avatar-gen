"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryType } from "../types";
import {
  User,
  Scissors,
  Eye,
  Smile,
  Glasses,
  Shirt,
  Image,
} from "lucide-react";

interface Props {
  selectedCategory: CategoryType;
  onSelectCategory: (value: CategoryType) => void;
}

export default function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <Tabs
      defaultValue={selectedCategory}
      onValueChange={(val) => onSelectCategory(val as CategoryType)}
    >
      <TabsList className="grid grid-cols-7 w-full h-full">
        <TabsTrigger value="face" className="flex flex-col items-center gap-1">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">Face</span>
        </TabsTrigger>

        <TabsTrigger value="hair" className="flex flex-col items-center gap-1">
          <Scissors className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">Hair</span>
        </TabsTrigger>

        <TabsTrigger value="eyes" className="flex flex-col items-center gap-1">
          <Eye className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">Eyes</span>
        </TabsTrigger>

        <TabsTrigger value="mouth" className="flex flex-col items-center gap-1">
          <Smile className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">Mouth</span>
        </TabsTrigger>

        <TabsTrigger
          value="accessories"
          className="flex flex-col items-center gap-1"
        >
          <Glasses className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">Accessories</span>
        </TabsTrigger>

        <TabsTrigger
          value="outfit"
          className="flex flex-col items-center gap-1"
        >
          <Shirt className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">Outfit</span>
        </TabsTrigger>

        <TabsTrigger
          value="background"
          className="flex flex-col items-center gap-1"
        >
          <Image className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">BG</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

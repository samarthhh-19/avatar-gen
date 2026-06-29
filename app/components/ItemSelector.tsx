"use client";

import React, { useEffect, useState } from "react";
import { CategoryType } from "../types";
import { cn } from "../utils/cn";

interface Props {
  category: CategoryType;
  selectedItem: string | null;
  onSelectItem: (item: string) => void;
  onRemoveItem?: () => void;
}

const ItemSelector = React.memo(function ItemSelector({
  category,
  selectedItem,
  onSelectItem,
}: Props) {
  const [items, setItems] = useState<string[]>([]);
  const [hasAutoSelected, setHasAutoSelected] = useState(false);

  useEffect(() => {
    // Next.js loads static files from /public
    const load = async () => {
      try {
        // Load avatar parts index for the current category
        const response = await fetch(`/avatar-parts/${category}/index.json`);
        const data = await response.json();
        setItems(data || []);

        // Auto-select first face on initial load
        if (
          category === "face" &&
          !hasAutoSelected &&
          data &&
          data.length > 0
        ) {
          onSelectItem(data[0]);
          setHasAutoSelected(true);
        }
      } catch {
        setItems([]);
      }
    };

    load();
  }, [category]);

  return (
    <div className="w-full">
      {selectedItem && (
        <div className="flex justify-end mb-2">
          <button
            onClick={() => onSelectItem(null as any)}
            className="px-3 py-1 text-sm bg-black hover:bg-black text-white rounded-md transition-colors"
          >
            Remove
          </button>
        </div>
      )}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {items.map((item) => (
          <div
            key={item}
            onClick={() => onSelectItem(item)}
            className={cn(
              "p-2 border rounded-md cursor-pointer flex items-center justify-center bg-white",
              selectedItem === item
                ? "border-primary ring-1 ring-primary"
                : "border-muted"
            )}
          >
            <img
              src={`/avatar-parts/${category}/${item}`}
              alt={item}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default ItemSelector;

"use client";

import AppHeader from "./AppHeader";
import AvatarCard from "./AvatarCard";
import { AvatarProvider } from "../context/AvatarContext";

export default function AppMain() {
  return (
    <AvatarProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-slate-900 flex items-center justify-center py-12">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          {/* Border wrapper - outside the container */}
          <div className="relative">
            {/* Top-left corner + */}
            <div className="absolute -left-1 -top-1 w-3 h-3 border-l-2 border-t-2 border-black z-10" />
            {/* Top-right corner + */}
            <div className="absolute -right-1 -top-1 w-3 h-3 border-r-2 border-t-2 border-black z-10" />
            {/* Bottom-left corner + */}
            <div className="absolute -left-1 -bottom-1 w-3 h-3 border-l-2 border-b-2 border-black z-10" />
            {/* Bottom-right corner + */}
            <div className="absolute -right-1 -bottom-1 w-3 h-3 border-r-2 border-b-2 border-black z-10" />

            {/* Main border box */}
            <div className="border-[1px] border-black bg-white dark:bg-slate-800  shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <AppHeader />
                <AvatarCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AvatarProvider>
  );
}

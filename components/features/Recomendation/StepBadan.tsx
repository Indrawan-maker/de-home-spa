"use client";

import Image from "next/image";
import abu from "@/public/images/anatomy/default.webp";
import { getSelectedImage } from "@/utils/getSelectedImage";

const areas = [
  { id: 1, name: "kepala", label: "Kepala", desc: "Kepala & Leher" },
  { id: 2, name: "lengan", label: "Tangan", desc: "Tangan & Lengan" },
  { id: 3, name: "punggung", label: "Punggung", desc: "Punggung & Bahu" },
  { id: 4, name: "kaki", label: "Kaki", desc: "Kaki & Betis" },
];

interface Props {
  selected: number[];
  onSelect: (ids: number[]) => void;
  onNext: () => void;
}

export default function StepBadan({ selected, onSelect, onNext }: Props) {
  const toggle = (id: number) => {
    onSelect(
      selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]
    );
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold text-stone-800 mb-1">
          Pilih area tubuh
        </h2>
        <p className="text-sm text-stone-500">
          Kamu bisa pilih lebih dari satu area
        </p>
      </div>

      <div className="flex justify-center mb-6">
          <div 
            className="cursor-pointer inline-block"
            onClick={(e) => {
              // Get image position
              const img = e.currentTarget.querySelector('img') as HTMLImageElement;
              if (!img) return;

              const rect = img.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const clickY = e.clientY - rect.top;

              // Calculate click position relative to image (0-1)
              const relX = clickX / rect.width;
              const relY = clickY / rect.height;

              // More accurate logic based on human body proportions
              let areaId = null;
              
              if (relY < 0.2) {
                // Top 20% = kepala
                areaId = 1;
              } else if (relY >= 0.2 && relY < 0.35) {
                // 20-35% = dada/bahu (punggung)
                if (relX < 0.15) {
                  // Ultra left = lengan kiri
                  areaId = 2;
                } else if (relX > 0.85) {
                  // Ultra right = lengan kanan
                  areaId = 2;
                } else {
                  // Center = punggung
                  areaId = 3;
                }
              } else if (relY >= 0.35 && relY < 0.54) {
                // 35-65% = perut/tubuh tengah (lengan bisa ada di sini)
                if (relX < 0.1) {
                  // Left = lengan kiri
                  areaId = 2;
                } else if (relX > 0.9) {
                  // Right = lengan kanan
                  areaId = 2;
                } else {
                  // Center = punggung juga bisa
                  areaId = 3;
                }
              } else {
                // Bottom 35% = kaki
                areaId = 4;
              }

              if (areaId) toggle(areaId);
            }}
          >
            <Image
              src={getSelectedImage(selected, abu)}
              alt="Area tubuh"
              loading="lazy"
              className="h-56 w-auto object-contain ml-36"
            />
          </div>
      </div>

      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className="mt-6 w-full py-3 rounded-2xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition disabled:opacity-40"
      >
        Lanjut
      </button>
    </div>
  );
}
import React from 'react';

export default function ProductImage({ image, name }) {
  return (
    <div className="px-4 sm:px-6 pt-4">
      <div className="w-full h-60 sm:h-72 bg-[#F6F7F9] rounded-3xl p-4 border border-[#ECE8F8] shadow-sm flex items-center justify-center relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain rounded-2xl"
        />
        <div className="absolute top-3.5 right-3.5 bg-brand-purple-light text-brand-purple text-[10.5px] font-bold px-2.5 py-1 rounded-full">
          No-cost EMI
        </div>
      </div>
    </div>
  );
}

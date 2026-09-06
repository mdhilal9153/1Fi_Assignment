import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

export default function ProductInfo({ product, finalPrice }) {
  if (!product) return null;

  return (
    <section className="px-4 sm:px-6 pt-4 flex flex-col">
      {/* Rating and Reviews */}
      {product.rating && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7E7993] mb-1">
          <span className="text-amber-500">★</span>
          <span className="text-brand-text-dark font-bold">{product.rating}</span>
          <span className="text-[#9B97AF]">({product.reviewCount} reviews)</span>
        </div>
      )}

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-extrabold text-[#141026] leading-tight">
        {product.name}
      </h1>

      {/* Price Row: Dynamically Calculated Final Price + MRP */}
      <div className="flex items-baseline gap-2.5 mt-2">
        <span className="text-2xl sm:text-3xl font-extrabold text-brand-purple tracking-tight">
          {formatCurrency(finalPrice)}
        </span>
        {product.mrp && product.mrp > finalPrice && (
          <span className="line-through text-sm text-[#9B97AF] font-medium">
            {formatCurrency(product.mrp)}
          </span>
        )}
      </div>
      <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
        ✓ Backed by your Mutual Funds portfolio with zero impact on liquid cash
      </p>
    </section>
  );
}

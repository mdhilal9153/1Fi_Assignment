import React from 'react';
import { Link } from 'react-router-dom';


function formatCurrency(amount) {
  if (typeof amount !== 'number') return `₹${amount || 0}`;
  return '₹' + amount.toLocaleString('en-IN');
}

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link
      to={`/marketplace/${product.id}`}
      className="group flex flex-col bg-white rounded-[24px] p-3 border border-[#F0EDF8] shadow-[0_4px_16px_rgba(30,10,60,0.04)] hover:shadow-[0_8px_24px_rgba(123,63,228,0.12)] transition-all duration-200 tap-bounce"
    >

      <div className="w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-[#EFEFF2] relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-watermelon"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 mt-2.5">
        {/* Rating and Review Count */}
        {product.rating && (
          <div className="flex items-center gap-1 text-[10.5px] font-semibold text-[#7E7993] mb-1">
            <span className="text-amber-500 text-xs">★</span>
            <span className="text-brand-text-dark font-bold">{product.rating}</span>
            <span className="text-[#9B97AF]">({product.reviewCount || 0})</span>
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-bold text-[14px] sm:text-[15px] text-[#141026] truncate leading-tight">
          {product.name}
        </h3>

        {/* Price Row: Base Price + Strikethrough MRP */}
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="font-extrabold text-[16px] sm:text-[17px] text-brand-purple tracking-tight">
            {formatCurrency(product.basePrice)}
          </span>
          {product.mrp && product.mrp > product.basePrice && (
            <span className="line-through text-[11.5px] sm:text-xs text-[#9B97AF] font-medium">
              {formatCurrency(product.mrp)}
            </span>
          )}
        </div>

        {/* No-cost EMI Badge Pill */}
        <div className="mt-2">
          <span className="inline-block bg-[#F3EEFC] text-brand-purple text-[10.5px] font-bold px-2.5 py-1 rounded-lg tracking-tight">
            No-cost EMI
          </span>
        </div>
      </div>
    </Link>
  );
}

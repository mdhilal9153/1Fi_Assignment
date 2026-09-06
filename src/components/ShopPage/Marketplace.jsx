import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from './ProductCard';

export default function Marketplace() {
  const { products, loading, error, refetch } = useProducts();

  return (
    <div id="panel-marketplace" role="tabpanel" aria-labelledby="tab-marketplace" className="w-full pb-6">
      {/* 1. LOADING STATE: 6 Skeleton Shimmer Cards in 2-Column Grid */}
      {loading && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-in-up">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-2.5 sm:p-3 border border-[#F0EDF8] shadow-sm animate-pulse flex flex-col"
            >
              <div className="w-full aspect-square bg-gray-200/80 rounded-[16px]" />
              <div className="mt-3 flex flex-col gap-2">
                <div className="h-2.5 w-14 bg-gray-200 rounded" />
                <div className="h-3.5 w-4/5 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                <div className="h-5 w-20 bg-purple-100/70 rounded-md mt-1" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. ERROR STATE: Empty state visual with SOMETHING WENT WRONG and Retry */}
      {!loading && error && (
        <div className="min-h-[260px] sm:min-h-[320px] rounded-2xl sm:rounded-3xl border-2 border-dashed border-red-200/80 bg-red-50/40 flex flex-col items-center justify-center p-6 sm:p-10 text-center animate-fade-in-up">
          <span className="text-3xl mb-2">⚠️</span>
          <h3 className="text-sm sm:text-base font-extrabold text-red-600 tracking-wide uppercase">
            SOMETHING WENT WRONG
          </h3>
          <p className="text-xs sm:text-sm text-brand-text-muted mt-1.5 max-w-[280px]">
            {error || 'Could not connect to marketplace database.'}
          </p>
          <button
            type="button"
            onClick={refetch}
            className="mt-4 px-5 py-2 rounded-full bg-brand-purple text-white text-xs font-bold tap-bounce hover:bg-brand-purple-hover shadow-sm cursor-pointer"
          >
            Retry
          </button>
        </div>
      )}

      {/* 3. SUCCESS STATE: 2-Column Product Grid */}
      {!loading && !error && products && products.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-in-up">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Empty State fallback if products array is empty */}
      {!loading && !error && (!products || products.length === 0) && (
        <div className="min-h-[220px] sm:min-h-[300px] rounded-2xl sm:rounded-3xl border-2 border-dashed border-brand-purple/40 bg-brand-purple-light/30 flex flex-col items-center justify-center p-6 sm:p-10 text-center animate-fade-in-up">
          <span className="text-2xl sm:text-3xl mb-2">🛍️</span>
          <h3 className="text-sm sm:text-base font-semibold text-brand-purple">No Products Available</h3>
          <p className="text-xs sm:text-sm text-brand-text-muted mt-1.5 max-w-[280px]">
            Check back later for new arrivals in 1Fi Marketplace.
          </p>
        </div>
      )}
    </div>
  );
}

import React from 'react';

export default function TopBrands() {
  return (
    <div id="panel-brands" role="tabpanel" aria-labelledby="tab-brands" className="animate-fade-in-up w-full">

      <div className="min-h-[220px] sm:min-h-[300px] rounded-2xl sm:rounded-3xl border-2 border-dashed border-[#E3DEFA] bg-white/70 flex flex-col items-center justify-center p-6 sm:p-10 text-center text-brand-text-muted">
        <span className="text-2xl sm:text-3xl mb-2">🏷️</span>
        <h3 className="text-sm sm:text-base font-semibold text-brand-text-dark">Top Brands</h3>
        <p className="text-xs sm:text-sm text-brand-text-muted mt-1.5 max-w-[280px]">
          Placeholder section for top partner brands.
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

export default function StickyCtaBar({ selectedMonthlyEMI, onProceed }) {
  return (
    <div className="fixed sm:absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#EDE8F7] px-4 sm:px-6 py-3 z-40 flex items-center justify-between shadow-[0_-4px_20px_rgba(30,10,60,0.06)]">
      <div>
        <span className="block text-[10.5px] text-[#86839A] font-medium">Monthly EMI</span>
        <span className="text-lg sm:text-xl font-extrabold text-brand-purple leading-tight tracking-tight">
          {formatCurrency(selectedMonthlyEMI)}
          <span className="text-xs text-[#86839A] font-normal"> /mo</span>
        </span>
      </div>

      <button
        type="button"
        onClick={onProceed}
        className="px-5 sm:px-6 py-3 rounded-full bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-purple/25 tap-bounce cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
      >
        <span>Proceed with this plan</span>
        <span>→</span>
      </button>
    </div>
  );
}

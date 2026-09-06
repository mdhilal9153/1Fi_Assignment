import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

export default function VariantSelection({ variants, selectedVariants, onSelectVariant }) {
  if (!variants || Object.keys(variants).length === 0) return null;

  return (
    <section className="px-4 sm:px-6 pt-5 flex flex-col gap-4">
      {Object.entries(variants).map(([category, options]) => (
        <div key={category} className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6A6680]">
            Select {category}
          </span>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => {
              const isSelected = selectedVariants[category] === option.label;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => onSelectVariant(category, option.label)}
                  className={`
                    px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer tap-bounce transition-all duration-200 flex items-center gap-1.5
                    ${isSelected
                      ? 'border-2 border-brand-purple bg-brand-purple-light/70 text-brand-purple font-bold shadow-sm'
                      : 'border border-[#E4E0F4] bg-white text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <span>{option.label}</span>
                  {option.priceDelta > 0 && (
                    <span className={`text-[10px] font-normal ${isSelected ? 'text-brand-purple' : 'text-[#8E8A9E]'}`}>
                      (+{formatCurrency(option.priceDelta)})
                    </span>
                  )}
                  {option.priceDelta < 0 && (
                    <span className={`text-[10px] font-normal ${isSelected ? 'text-brand-purple' : 'text-[#8E8A9E]'}`}>
                      ({formatCurrency(option.priceDelta)})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

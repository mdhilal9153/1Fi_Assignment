import React from 'react';
import { calculateEMI } from '../../utils/emiCalculator';
import { formatCurrency } from '../../utils/formatCurrency';

export default function EmiPlansSection({ emiPlans, selectedPlanIndex, onSelectPlan, finalPrice }) {
  if (!emiPlans || emiPlans.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 pt-6">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#6A6680]">
          Choose EMI Tenure
        </h2>
        <span className="text-[11px] font-bold text-brand-purple bg-brand-purple-light px-2 py-0.5 rounded-full">
          0% Interest
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
        {emiPlans.map((plan, index) => {
          const isSelected = selectedPlanIndex === index;
          const monthlyAmount = calculateEMI(finalPrice, plan.months, plan.interestRate);

          return (
            <div
              key={plan.months}
              onClick={() => onSelectPlan(index)}
              className={`
                p-2.5 rounded-2xl border cursor-pointer tap-bounce transition-all duration-200 flex flex-col justify-between
                ${isSelected
                  ? 'border-2 border-brand-purple bg-brand-purple-light/50 shadow-sm'
                  : 'border-[#EDE8F7] bg-white hover:border-[#D6CEF0]'
                }
              `}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold text-[#1F1B33] truncate">
                  {plan.months} Mo
                </span>
                {plan.interestRate === 0 && (
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded whitespace-nowrap">
                    No-cost
                  </span>
                )}
              </div>

              <div className="mt-2.5">
                <span className="text-[14.5px] sm:text-[15px] font-extrabold text-brand-purple tracking-tight block leading-tight truncate">
                  {formatCurrency(monthlyAmount)}
                </span>
                <span className="text-[10px] text-[#86839A] font-medium block mt-0.5">
                  /month
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

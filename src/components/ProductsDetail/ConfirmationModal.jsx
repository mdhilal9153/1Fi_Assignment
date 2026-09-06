import React from 'react';
import { HiCheckCircle } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/formatCurrency';

export default function ConfirmationModal({ isOpen, onClose, selectedPlan, product, selectedMonthlyEMI }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
          <HiCheckCircle className="text-3xl" />
        </div>
        <h3 className="text-lg font-bold text-[#141026]">
          Plan Selected!
        </h3>
        <p className="text-xs text-brand-text-muted mt-1.5 leading-relaxed">
          You selected the <strong className="text-brand-text-dark">{selectedPlan?.months}-Month No-Cost EMI</strong> plan for <strong className="text-brand-text-dark">{product.name}</strong> at <strong className="text-brand-purple">{formatCurrency(selectedMonthlyEMI)}/month</strong>.
        </p>
        <div className="mt-3 p-2.5 rounded-xl bg-purple-50 text-[11px] text-brand-purple font-medium w-full">
          Backed by your Mutual Funds portfolio via 1Fi
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-full bg-brand-purple text-white text-xs font-bold tap-bounce shadow-md hover:bg-brand-purple-hover cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}

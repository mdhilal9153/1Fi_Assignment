import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { useProduct } from '../hooks/useProducts';
import { calculateEMI } from '../utils/emiCalculator';

import ProductImage from '../components/ProductsDetail/ProductImage';
import ProductInfo from '../components/ProductsDetail/ProductInfo';
import VariantSelection from '../components/ProductsDetail/VariantSelection';
import SpecificationsSection from '../components/ProductsDetail/SpecificationsSection';
import EmiPlansSection from '../components/ProductsDetail/EmiPlansSection';
import StickyCtaBar from '../components/ProductsDetail/StickyCtaBar';
import ConfirmationModal from '../components/ProductsDetail/ConfirmationModal';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { product, loading, error, refetch } = useProduct(productId);


  const [selectedVariants, setSelectedVariants] = useState({});

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
    if (product && product.variants) {
      const initial = {};
      Object.keys(product.variants).forEach((key) => {
        const options = product.variants[key];
        if (Array.isArray(options) && options.length > 0) {
          initial[key] = options[0].label;
        }
      });
      setSelectedVariants(initial);
      setSelectedPlanIndex(0);
    }
  }, [product]);

  // Dynamic price calculation: basePrice + storage delta + color delta
  const finalPrice = useMemo(() => {
    if (!product) return 0;
    let price = product.basePrice || 0;

    if (product.variants) {
      Object.keys(product.variants).forEach((key) => {
        const selectedLabel = selectedVariants[key];
        const option = product.variants[key]?.find((opt) => opt.label === selectedLabel);
        if (option && option.priceDelta) {
          price += option.priceDelta;
        }
      });
    }

    return price;
  }, [product, selectedVariants]);


  const handleSelectVariant = (category, label) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [category]: label,
    }));
  };


  const selectedPlan = product?.emiPlans?.[selectedPlanIndex] || product?.emiPlans?.[0];
  const selectedMonthlyEMI = selectedPlan
    ? calculateEMI(finalPrice, selectedPlan.months, selectedPlan.interestRate)
    : 0;


  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 animate-fade-in-up">
        <div className="w-12 h-12 rounded-full border-4 border-brand-purple/20 border-t-brand-purple animate-spin mb-4" />
        <p className="text-xs font-semibold text-brand-text-muted">Loading product details...</p>
      </div>
    );
  }


  if (error || !product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
        <span className="text-4xl mb-3">⚠️</span>
        <h2 className="text-base font-bold text-red-600 uppercase tracking-wide">
          Product Not Found
        </h2>
        <p className="text-xs text-brand-text-muted mt-1 max-w-[260px]">
          {error || 'Unable to retrieve this product from the database.'}
        </p>
        <div className="flex gap-3 mt-5">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="px-4 py-2 rounded-full border border-gray-300 text-xs font-semibold text-gray-700 tap-bounce cursor-pointer"
          >
            Back to Shop
          </button>
          <button
            type="button"
            onClick={refetch}
            className="px-5 py-2 rounded-full bg-brand-purple text-white text-xs font-bold tap-bounce shadow-sm cursor-pointer"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col pb-32 animate-fade-in-up">

      <header className="sticky top-0 z-30 bg-brand-bg/95 backdrop-blur-md px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-[#EDE8F7]">
        <button
          type="button"
          onClick={() => navigate('/shop')}
          aria-label="Back to Marketplace"
          className="w-9 h-9 rounded-full bg-white border border-[#E9E6F5] flex items-center justify-center text-brand-text-dark shadow-sm tap-bounce cursor-pointer hover:bg-gray-50"
        >
          <HiArrowLeft className="text-lg" />
        </button>
        <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">
          Marketplace
        </span>
        <div className="w-9" />
      </header>


      <ProductImage image={product.image} name={product.name} />


      <ProductInfo product={product} finalPrice={finalPrice} />


      <VariantSelection
        variants={product.variants}
        selectedVariants={selectedVariants}
        onSelectVariant={handleSelectVariant}
      />


      <SpecificationsSection specs={product.specs} />


      <EmiPlansSection
        emiPlans={product.emiPlans}
        selectedPlanIndex={selectedPlanIndex}
        onSelectPlan={setSelectedPlanIndex}
        finalPrice={finalPrice}
      />


      <StickyCtaBar
        selectedMonthlyEMI={selectedMonthlyEMI}
        onProceed={() => setShowConfirmation(true)}
      />


      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        selectedPlan={selectedPlan}
        product={product}
        selectedMonthlyEMI={selectedMonthlyEMI}
      />
    </div>
  );
}

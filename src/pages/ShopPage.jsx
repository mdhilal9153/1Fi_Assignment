import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ShopHero from '../components/ShopPage/ShopHero';
import TopBrands from '../components/ShopPage/TopBrands';
import NearbyStores from '../components/ShopPage/NearbyStores';
import Marketplace from '../components/ShopPage/Marketplace';
import ShopFoot from '../components/ShopPage/ShopFoot';

const TABS = [
  { id: 'brands', label: 'Top Brands', placeholder: 'Search brands...' },
  { id: 'stores', label: 'Nearby Stores', placeholder: 'Search stores...' },
  { id: 'marketplace', label: '1Fi Marketplace', placeholder: 'Search products in marketplace...' },
];

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [searchQuery, setSearchQuery] = useState('');

  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);
  const currentPlaceholder = TABS[activeIndex]?.placeholder || 'Search...';

  return (
    <div className="w-full flex flex-col">
      {/*HERO BANNER */}
      <ShopHero />

      {/*TAB SWITCHER & SEARCH SECTION */}
      <section className="px-4 sm:px-8 pt-3.5 sm:pt-6 flex flex-col gap-2.5 sm:gap-3.5">

        <div className="w-full max-w-full sm:max-w-xl sm:mx-auto">
          <div
            role="tablist"
            aria-label="Shop categories"
            className="relative bg-[#ECE8F8] p-1 sm:p-1.5 rounded-full flex items-center shadow-inner select-none h-11 sm:h-12"
          >

            <div
              className="absolute top-1 bottom-1 sm:top-1.5 sm:bottom-1.5 rounded-full bg-white shadow-[0_2px_6px_rgba(30,10,60,0.08)] transition-all duration-300 ease-watermelon"
              style={{
                width: 'calc((100% - 8px) / 3)',
                transform: `translateX(calc(${activeIndex} * 100%))`,
                left: '4px',
              }}
            />


            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative z-10 flex-1 h-full flex flex-col items-center justify-center px-1 rounded-full
                    transition-colors duration-200 tap-bounce cursor-pointer
                    ${isActive ? 'text-brand-purple font-bold' : 'text-[#6F6B84] hover:text-[#45415A] font-semibold'}
                  `}
                >
                  <span className="text-[12px] sm:text-[13px] md:text-sm tracking-tight leading-none truncate max-w-full">
                    {tab.label}
                  </span>


                  <div
                    className={`
                      w-5 sm:w-7 h-[2px] sm:h-[2.5px] rounded-full bg-brand-purple mt-1 sm:mt-1.5 transition-all duration-200 ease-watermelon
                      ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>


        <div className="w-full max-w-full sm:max-w-xl sm:mx-auto">
          <div className="bg-white border border-[#E9E6F5] rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 focus-within:border-brand-purple focus-within:shadow-[0_0_0_3px_rgba(123,63,228,0.12)]">
            <FiSearch className="text-[#9D99AF] text-base sm:text-lg flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentPlaceholder}
              className="w-full bg-transparent text-xs sm:text-sm text-brand-text-dark placeholder-[#9D99AF] focus:outline-none truncate"
              aria-label={currentPlaceholder}
            />
          </div>
        </div>
      </section>


      <section className="px-4 sm:px-8 pt-4 sm:pt-6 flex-1 w-full max-w-full sm:max-w-xl sm:mx-auto">
        {activeTab === 'brands' && <TopBrands />}
        {activeTab === 'stores' && <NearbyStores />}
        {activeTab === 'marketplace' && <Marketplace />}


        <div className="pt-2 pb-6">
          <ShopFoot />
        </div>
      </section>
    </div>
  );
}

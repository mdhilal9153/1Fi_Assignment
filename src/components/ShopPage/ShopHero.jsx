import React from 'react';
import { HiSparkles } from 'react-icons/hi2';
import heroIllustration from '../../assets/hero-illustration.jpg';

export default function ShopHero() {
  return (
    <section
      aria-label="Shop Hero Banner"
      className="relative bg-gradient-to-b from-[#180447] via-[#24075D] to-[#380E83] text-white px-5 sm:px-8 pt-5 sm:pt-7 pb-5 sm:pb-7 rounded-b-[28px] sm:rounded-b-[36px] overflow-hidden shadow-md select-none"
    >

      <div className="absolute top-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between gap-4">

        <div className="flex-1 pr-2 max-w-[64%] sm:max-w-[62%]">

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-wide uppercase text-white shadow-sm">
            <HiSparkles className="text-amber-300 text-[11px] sm:text-sm" />
            <span>NO-COST EMIs</span>
          </div>


          <h1 className="text-[20px] sm:text-[26px] md:text-[28px] font-extrabold leading-[1.2] tracking-tight mt-2.5 sm:mt-3.5 text-white">
            Shop today,<br />
            <span className="italic font-bold text-white/95">Pay later using</span><br />
            Mutual funds.
          </h1>


          <p className="text-[10.5px] sm:text-xs md:text-sm text-white/80 leading-relaxed mt-2 sm:mt-3 font-normal">
            No credit score required. No interest.<br />
            Backed by your investments.
          </p>
        </div>


        <div className="w-[36%] max-w-[125px] sm:max-w-[170px] md:max-w-[195px] flex items-center justify-end relative">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <img
              src={heroIllustration}
              alt="Shop gadgets and vehicles backed by mutual funds"
              className="w-full h-full object-contain rounded-2xl drop-shadow-[0_10px_22px_rgba(0,0,0,0.3)] scale-105"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

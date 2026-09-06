import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import { IoSpeedometerOutline } from 'react-icons/io5';

export default function ShopFoot() {
  return (
    <section aria-label="Why Pay With 1Fi" className="w-full">
      <div className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-[#EDE8F7] shadow-[0_4px_20px_rgba(30,10,60,0.03)]">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[3.5px] h-4 bg-brand-purple rounded-full" />
          <h2 className="text-[12.5px] sm:text-xs font-extrabold tracking-wider text-brand-purple uppercase">
            WHY PAY WITH 1FI
          </h2>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col gap-4">

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#EDE8FC] text-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5">
              <FiTrendingUp className="text-lg stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[13.5px] sm:text-sm font-bold text-[#141026] leading-snug">
                Mutual Funds Stay Invested
              </h3>
              <p className="text-[11.5px] sm:text-xs text-[#706C85] leading-relaxed mt-0.5 font-normal">
                Keep earning potential market compounding while paying in low monthly chunks.
              </p>
            </div>
          </div>


          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#EDE8FC] text-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5">
              <IoSpeedometerOutline className="text-xl stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[13.5px] sm:text-sm font-bold text-[#141026] leading-snug">
                Zero Paperwork & Instant Sanction
              </h3>
              <p className="text-[11.5px] sm:text-xs text-[#706C85] leading-relaxed mt-0.5 font-normal">
                Linked digitally through your CAS statement in under 60 seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { HiOutlineHome, HiOutlineUser } from 'react-icons/hi2';
import { IoStorefrontOutline } from 'react-icons/io5';
import { RiBillLine } from 'react-icons/ri';
import { BsGraphUp } from 'react-icons/bs';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: HiOutlineHome, isShop: false },
  { id: 'shop', label: 'Shop', icon: IoStorefrontOutline, isShop: true },
  { id: 'emi-dues', label: 'EMI Dues', icon: RiBillLine, isShop: false },
  { id: 'limit', label: 'Limit', icon: BsGraphUp, isShop: false },
  { id: 'profile', label: 'Profile', icon: HiOutlineUser, isShop: false },
];

export default function BottomNav() {
  return (
    <nav
      aria-label="Bottom Navigation"
      className="w-full bg-white/95 backdrop-blur-lg border border-[#EDE8F7] shadow-[0_8px_24px_rgba(30,10,60,0.1)] rounded-[26px] sm:rounded-[32px] px-1.5 sm:px-3 py-1 sm:py-2 flex items-center justify-between select-none"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = item.isShop;

        return (
          <button
            key={item.id}
            type="button"
            className={`
              relative flex-1 flex flex-col items-center justify-center py-1 sm:py-1.5 px-1 rounded-2xl cursor-pointer
              transition-all duration-200 ease-watermelon tap-bounce
              ${isActive
                ? 'text-brand-purple font-semibold'
                : 'text-[#9A97AC] hover:text-[#5E5A74] font-medium'
              }
            `}
          >

            {isActive && (
              <div
                className="absolute -top-1 sm:-top-1.5 w-5 sm:w-8 h-[2.5px] sm:h-[3px] rounded-full bg-brand-purple transition-all duration-300 ease-watermelon"
              />
            )}


            <div className="relative flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 mb-0.5 sm:mb-1">
              <Icon className={`text-[19px] sm:text-[23px] transition-transform duration-200 ${isActive ? 'scale-105 stroke-[2.2]' : 'scale-100 stroke-[1.8]'}`} />
            </div>


            <span className={`text-[10px] sm:text-[12px] leading-tight tracking-tight truncate max-w-full ${isActive ? 'font-bold' : 'font-medium'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

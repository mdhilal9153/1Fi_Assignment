import React from 'react';

export default function SpecificationsSection({ specs }) {
  if (!specs || Object.keys(specs).length === 0) return null;

  return (
    <section className="px-4 sm:px-6 pt-6">
      <h2 className="text-xs font-bold uppercase tracking-wider text-[#6A6680] mb-2.5">
        Key Specifications
      </h2>
      <div className="bg-white rounded-2xl border border-[#EDE8F7] shadow-sm overflow-hidden divide-y divide-gray-100">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between px-4 py-2.5 text-xs">
            <span className="text-[#86839A] font-medium">{key}</span>
            <span className="text-[#1A162B] font-semibold text-right max-w-[60%]">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

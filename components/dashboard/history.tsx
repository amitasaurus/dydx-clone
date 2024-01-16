'use client';
import React from 'react';
import { GoHistory } from 'react-icons/go';

export default function History() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="bg-slate-900 border border-color h-full">
      <div className="flex border-b border-color">
        <div className="tab-group-container w-1/3">
          {['Position', 'Orders', 'Fills'].map((tab, index) => (
            <div
              key={index}
              className={`tab-group border-b-0 ${
                activeTab === index
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-500'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full -m-8">
        <GoHistory size="36" className="text-slate-500" />
        <div className="text-md mt-4 text-slate-500">
          You have no trade history
        </div>
      </div>
    </div>
  );
}

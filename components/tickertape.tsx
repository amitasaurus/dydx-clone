import React from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { PiCaretDownFill } from 'react-icons/pi';

export default function tickertape() {
  return (
    <div className="flex items-center border-t border-b border-solid bg-slate-900 h-14 border-slate-50/10">
      <div className="flex items-center w-1/4 h-full px-4 cursor-pointer bg-slate-900 hover:bg-slate-800">
        <Image
          src={`https://dydx.trade/currencies/btc.png`}
          alt="asset logo"
          width="32"
          height="32"
          className="w-8 h-8"
        />
        <div className="ml-4 text-lg text-white">BTC-USD</div>
        <div className="flex items-center justify-center ml-auto text-xs text-gray-400 bg-inherit">
          All Markets
          <FiChevronDown className="ml-2" />
        </div>
      </div>
      <div className="flex flex-col justify-center px-8 text-lg border-l border-r border-solid h-4/5 text-rose-500 border-slate-50/10">
        $42,712
      </div>
      <div className="flex flex-col items-start justify-center px-4 border-r border-solid h-4/5 border-slate-50/10">
        <div className="text-[10px] text-slate-500 mb-0.5">Oracle Price</div>
        <div className="flex items-center text-xs text-slate-200">$42,687</div>
      </div>
      <div className="flex flex-col items-start justify-center px-4 border-r border-solid h-4/5 border-slate-50/10">
        <div className="text-[10px] text-slate-500 mb-0.5">24h Change</div>
        <div className="flex items-center text-xs text-rose-500">
          <PiCaretDownFill className="mr-1" />
          $323&nbsp;0.75%
        </div>
      </div>
      <div className="flex flex-col items-start justify-center px-4 border-r border-solid h-4/5 border-slate-50/10">
        <div className="text-[10px] text-slate-500 mb-0.5">Open Interest</div>
        <div className="flex items-center text-xs text-slate-200">
          237.66
          <div className="bg-slate-500 text-white text-xs py-0.5 px-1 ml-2 rounded">
            BTC
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center px-4 border-r border-solid h-4/5 border-slate-50/10">
        <div className="text-[10px] text-slate-500 mb-0.5">1h Funding</div>
        <div className="flex items-center text-xs text-emerald-500">
          0.002024%
        </div>
      </div>
      <div className="flex flex-col items-start justify-center px-4 border-r border-solid h-4/5 border-slate-50/10">
        <div className="text-[10px] text-slate-500 mb-0.5">24h Volume</div>
        <div className="flex items-center text-xs text-slate-200">
          $194,850,159
        </div>
      </div>
      <div className="flex flex-col items-start justify-center px-4 border-r border-solid h-4/5 border-slate-50/10">
        <div className="text-[10px] text-slate-500 mb-0.5">24h Trade</div>
        <div className="flex items-center text-xs text-slate-200">98,395</div>
      </div>
      <div className="p-4 border-solid">
        <div className="text-[10px] text-slate-500 mb-0.5">Next Funding</div>
        <div className="flex items-center text-xs text-slate-200">28:30</div>
      </div>
    </div>
  );
}

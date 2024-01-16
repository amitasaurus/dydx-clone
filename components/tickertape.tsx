import React from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { PiCaretDownFill } from 'react-icons/pi';

export default function tickertape() {
  return (
    <div className="bg-slate-900 h-14 flex items-center border-solid border-t border-b border-slate-50/10">
      <div className="flex items-center w-1/4 bg-slate-900 hover:bg-slate-800 cursor-pointer h-full px-4">
        <Image
          src={`https://dydx.trade/currencies/btc.png`}
          alt="asset logo"
          width="32"
          height="32"
          className="h-8 w-8"
        />
        <div className="text-lg text-white ml-4">BTC-USD</div>
        <div className="bg-inherit text-gray-400 text-xs flex justify-center items-center ml-auto">
          All Markets
          <FiChevronDown className="ml-2" />
        </div>
      </div>
      <div className="px-8 py-4 text-lg text-rose-500 border-solid border-r border-l border-slate-50/10">
        $42,712
      </div>
      <div className="p-4 border-solid border-r border-slate-50/10">
        <div className="text-xs text-slate-500 mb-1">Oracle Price</div>
        <div className="text-sm text-slate-200 flex items-center">$42,687</div>
      </div>
      <div className="p-4 border-solid border-r border-slate-50/10">
        <div className="text-xs text-slate-500 mb-1">24h Change</div>
        <div className="text-sm text-rose-500 flex items-center">
          <PiCaretDownFill className="mr-1" />
          $323&nbsp;0.75%
        </div>
      </div>
      <div className="p-4 border-solid border-r border-slate-50/10">
        <div className="text-xs text-slate-500 mb-1">Open Interest</div>
        <div className="text-sm text-slate-200 flex items-center">
          237.66
          <div className="bg-slate-500 text-white text-xs py-0.5 px-1 ml-2 rounded">
            BTC
          </div>
        </div>
      </div>
      <div className="p-4 border-solid border-r border-slate-50/10">
        <div className="text-xs text-slate-500 mb-1">1h Funding</div>
        <div className="text-sm text-emerald-500 flex items-center">
          0.002024%
        </div>
      </div>
      <div className="p-4 border-solid border-r border-slate-50/10">
        <div className="text-xs text-slate-500 mb-1">24h Volume</div>
        <div className="text-sm text-slate-200 flex items-center">
          $194,850,159
        </div>
      </div>
      <div className="p-4 border-solid border-r border-slate-50/10">
        <div className="text-xs text-slate-500 mb-1">24h Trade</div>
        <div className="text-sm text-slate-200 flex items-center">98,395</div>
      </div>
      <div className="p-4 border-solid">
        <div className="text-xs text-slate-500 mb-1">Next Funding</div>
        <div className="text-sm text-slate-200 flex items-center">28:30</div>
      </div>
    </div>
  );
}

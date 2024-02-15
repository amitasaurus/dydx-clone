'use client';
import React from 'react';
import { FaSignal } from 'react-icons/fa6';
import { RiDonutChartLine } from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';
import Dropdown from '@/components/dropdown';
import { cn } from '@/lib/utils';
import Input from '@/components/dashboard/input';

enum TradeType {
  BUY,
  SELL,
}

export default function Trade() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [tradeType, setTradeType] = React.useState(TradeType[0]);

  return (
    <div>
      <div className="flex justify-between p-4 border-b border-slate-50/10">
        <div className="text-sm text-slate-200">Account</div>
        <div className="flex">
          <div className="px-2 py-1 mr-2 text-xs border cursor-pointer bg-slate-800 text-slate-200 rounded-3xl border-slate-50/10">
            Withdraw
          </div>
          <div className="px-2 py-1 text-xs border cursor-pointer bg-slate-800 text-slate-200 rounded-3xl border-slate-50/10">
            Deposit
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="p-4 border-b border-r border-slate-50/10 text-slate-500">
          <div className="flex items-center text-xs">
            <div>Leverage</div>
            <FaSignal className="ml-1 text-emerald-500" />
          </div>
          <div>-</div>
        </div>
        <div className="p-4 border-b border-slate-50/10 text-slate-500">
          <div className="flex text-xs">
            <div>Equity</div>
          </div>
          <div>-</div>
        </div>
        <div className="p-4 border-b border-r border-slate-50/10 text-slate-500">
          <div className="flex items-center text-xs">
            <div>Margin Usage</div>
            <RiDonutChartLine className="ml-1 text-emerald-500" />
          </div>
          <div>-</div>
        </div>
        <div className="p-4 border-b border-slate-50/10 text-slate-500">
          <div className="flex text-xs">
            <div>Buying Power</div>
          </div>
          <div>-</div>
        </div>
      </div>
      <div>
        {/* Tab Button Group */}
        <div className="sticky top-0 z-20 tab-group-container">
          {['Limit', 'Market'].map((tab, index) => (
            <div
              key={index}
              className={`tab-group ${
                activeTab === index
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-500'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
          <Dropdown
            items={[
              'Stop Limit',
              'Stop Market',
              'Take Profit Limit',
              'Take Profit Market',
            ]}
            title="More"
            trigger={
              <div className="flex items-center justify-center flex-1 text-sm cursor-pointer text-slate-500">
                More
                <FiChevronDown className="ml-1" />
              </div>
            }
          />
        </div>

        <div className="p-4">
          {/* Trade Type Toggle */}
          <div className="flex w-full rounded-lg bg-slate-800">
            {[TradeType[0], TradeType[1]].map((type, index) => (
              <div
                key={index}
                className={cn(
                  ' text-slate-500 flex-1 cursor-pointer text-sm text-center px-2 py-3 border-slate-800 border-2 rounded-lg',
                  tradeType === type &&
                    type === TradeType[0] &&
                    'text-emerald-500 border-emerald-500 border-2 bg-slate-900',
                  tradeType === type &&
                    type === TradeType[1] &&
                    'text-rose-500 border-rose-500 border-2 bg-slate-900'
                )}
                onClick={() => setTradeType(type)}
              >
                {type[0].toUpperCase() + type.slice(1).toLowerCase()}
              </div>
            ))}
          </div>
          {/* Input Form */}
          <form action="#" className="grid grid-cols-2 grid-rows-2">
            <div className="my-4 col-span-2">
              <Input type="number" label="Limit Price(USD)" fiat />
            </div>
            <div className="mr-2">
              <Input type="number" label="Amount(ETH)" />
            </div>
            <div>
              <Input type="number" label="Amount(USD)" fiat />
            </div>
          </form>
          <div className="btn-cta">Execute</div>
        </div>
      </div>
    </div>
  );
}

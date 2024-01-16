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

export default function trade() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [tradeType, setTradeType] = React.useState(TradeType[0]);

  return (
    <div>
      <div className="p-4 flex justify-between border-b border-slate-50/10">
        <div className="text-sm text-slate-200">Account</div>
        <div className="flex">
          <div className="bg-slate-800 text-slate-200 px-2 py-1 mr-2 rounded-3xl text-xs border-slate-50/10 border cursor-pointer">
            Withdraw
          </div>
          <div className="bg-slate-800 text-slate-200 px-2 py-1 rounded-3xl text-xs border-slate-50/10 border cursor-pointer">
            Deposit
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="p-4 border-slate-50/10 text-slate-500 border-b border-r">
          <div className="text-xs flex items-center">
            <div>Leverage</div>
            <FaSignal className="text-emerald-500 ml-1" />
          </div>
          <div>-</div>
        </div>
        <div className="p-4 border-slate-50/10 border-b text-slate-500">
          <div className="text-xs flex">
            <div>Equity</div>
          </div>
          <div>-</div>
        </div>
        <div className="p-4 border-slate-50/10 border-b border-r text-slate-500">
          <div className="text-xs flex items-center">
            <div>Margin Usage</div>
            <RiDonutChartLine className="text-emerald-500 ml-1" />
          </div>
          <div>-</div>
        </div>
        <div className="p-4 border-slate-50/10 border-b text-slate-500">
          <div className="text-xs flex">
            <div>Buying Power</div>
          </div>
          <div>-</div>
        </div>
      </div>
      <div>
        {/* Tab Button Group */}
        <div className="bg-slate-900 width-full flex h-12 border-b border-slate-50/10 sticky top-0 z-20">
          {['Limit', 'Market'].map((tab, index) => (
            <div
              key={index}
              className={`flex flex-1 cursor-pointer justify-center items-center text-sm border-r border-slate-50/10 ${
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
              <div className="flex flex-1 cursor-pointer justify-center items-center text-sm text-slate-500">
                More
                <FiChevronDown className="ml-1" />
              </div>
            }
          />
        </div>

        <div className="p-4">
          {/* Trade Type Toggle */}
          <div className="bg-slate-800 flex w-full rounded-lg">
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
            <div className="col-span-2 my-4">
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

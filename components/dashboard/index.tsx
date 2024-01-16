import React from 'react';
import clsx from 'clsx/lite';
import styles from '@/styles/dashboard.module.css';
import Orderbook from '@/components/dashboard/orderbook';
import Trade from '@/components/dashboard/trade';
import History from '@/components/dashboard/history';
import TradingViewWidget from '@/components/TradingViewWidget';

export default function dashboard() {
  return (
    <div className={clsx('bg-slate-900 grid grid-cols-5', styles.dashboard)}>
      <div className="text-white col-span-3 bg-slate-900 grid grid-rows-5">
        <div className="border-r border-slate-50/10 row-span-3">
          <TradingViewWidget />
        </div>
        <div className="row-span-3">
          <History />
        </div>
      </div>
      <Orderbook />
      <Trade />
    </div>
  );
}

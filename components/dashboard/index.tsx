import React from 'react';
import clsx from 'clsx/lite';
import styles from '@/styles/dashboard.module.css';
import Orderbook from '@/components/dashboard/orderbook';
import Trade from '@/components/dashboard/trade';

export default function dashboard() {
  return (
    <div className={clsx('bg-slate-900 grid grid-cols-5', styles.dashboard)}>
      <div className="text-white col-span-3 bg-slate-900 grid grid-rows-2">
        <div className="text-white border-r border-slate-50/10">Chart</div>
        <div className="text-white border-t border-r border-slate-50/10">
          Order History
        </div>
      </div>
      <Orderbook />
      <Trade />
    </div>
  );
}

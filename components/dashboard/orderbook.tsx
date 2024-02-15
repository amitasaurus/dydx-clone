'use client';
import React, { FC, ReactElement } from 'react';
import styles from '@/styles/dashboard.module.css';
import { cn, getRandomInt } from '@/lib/utils';

interface IElement {
  size: number;
  price: number;
}

interface IOrderbookComponent {
  size: number;
  price: number;
  type?: 'bid' | 'ask';
  limiter: number;
}

function generateRandomElements(size: number): IElement[] {
  const randomElementsSize: number[] = Array(size)
    .fill(null)
    .map((_, i) => parseFloat(Math.random().toFixed(4)));
  const randomElementsPrice: number[] = Array(size)
    .fill(null)
    .map((_, i) => getRandomInt(40000, 45000));

  const elements: IElement[] = [];
  for (let i = 0; i < randomElementsSize.length; i++) {
    elements.push({
      size: randomElementsSize[i],
      price: randomElementsPrice[i],
    });
  }

  return elements;
}

const totalItems = 25;

const OrderbookComponent: FC<IOrderbookComponent> = ({
  size,
  price,
  type: string,
  limiter,
}): ReactElement => {
  const outerClass = cn(
    string === 'ask' ? 'bg-emerald-500/15' : 'bg-rose-500/15',
    'absolute top-0 right-0 h-full z-0 flex justify-end'
  );
  const innerClass = cn(
    string === 'ask' ? 'bg-emerald-500/50' : 'bg-rose-500/50',
    'h-full'
  );

  return (
    <div className="grid grid-cols-3 hover:bg-slate-800 my-0.5 relative">
      <div className="z-10 py-1 text-xs text-right text-white">{size}</div>
      <div className="z-10 py-1 text-xs text-right text-white">{price}</div>
      <div
        className={outerClass}
        style={{
          width:
            string === 'ask'
              ? `${(limiter / totalItems) * 100}%`
              : `${100 - (limiter / totalItems) * 100}%`,
        }}
      >
        <div
          className={innerClass}
          style={{
            width:
              string === 'ask'
                ? `${(limiter / totalItems) * 100}%`
                : `${100 - (limiter / totalItems) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default function Orderbook() {
  const [activeTab, setActiveTab] = React.useState(0);

  const bids = generateRandomElements(totalItems);
  const asks = generateRandomElements(totalItems);
  return (
    <div className="overflow-y-scroll border-r border-slate-50/10">
      {/* Tab Button Group */}
      <div className="sticky top-0 z-20 tab-group-container">
        {['Book', 'Trades'].map((tab, index) => (
          <div
            key={index}
            className={`tab-group ${
              activeTab === index ? 'bg-slate-950 text-white' : 'text-slate-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Tab Content */}
      {/* Header */}
      <div
        className={cn('grid grid-cols-3 py-2 sticky top-12 z-20', styles.blur)}
      >
        <div className="flex items-center justify-end text-xs text-center text-slate-500">
          Size
          <div className="bg-slate-500 text-white text-[10px] py-0.5 px-1 ml-2 rounded">
            BTC
          </div>
        </div>
        <div className="flex items-center justify-end text-xs text-center text-slate-500">
          Price
          <div className="bg-slate-500 text-white text-[10px] py-0.5 px-1 ml-2 rounded">
            USD
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 text-xs text-center text-slate-500">
          Mine
        </div>
      </div>
      {/* Bid */}
      {bids.map((e, i) => (
        <OrderbookComponent
          size={e.size}
          price={e.price}
          key={i}
          type="bid"
          limiter={i}
        />
      ))}
      {/* divider */}
      <div
        className={cn(
          'grid grid-cols-3 hover:bg-slate-800 my-0.5 px-1 py-2 border-slate-50/10 border-y sticky bottom-0 top-[84px] z-20',
          styles.blur
        )}
      >
        <div className="text-xs text-right text-white">Spread</div>
        <div className="text-xs text-right text-white">1</div>
        <div className="pr-4 text-xs text-right text-white">0.00%</div>
      </div>
      {/* Asks */}
      {asks.map((e, i) => (
        <OrderbookComponent
          size={e.size}
          price={e.price}
          key={i}
          type="ask"
          limiter={i}
        />
      ))}
    </div>
  );
}

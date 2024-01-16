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
      <div className="text-xs text-white text-right py-1 z-10">{size}</div>
      <div className="text-xs text-white text-right py-1 z-10">{price}</div>
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

export default function orderbook() {
  const [activeTab, setActiveTab] = React.useState(0);

  const bids = generateRandomElements(totalItems);
  const asks = generateRandomElements(totalItems);
  return (
    <div className="border-r border-slate-50/10 overflow-y-scroll">
      {/* Tab Button Group */}
      <div className="bg-slate-900 width-full flex h-12 border-b border-slate-50/10 sticky top-0 z-20">
        {['Book', 'Trades'].map((tab, index) => (
          <div
            className={`flex flex-1 cursor-pointer justify-center items-center text-sm border-r border-slate-50/10 ${
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
        <div className="text-center flex text-xs items-center justify-end text-slate-500">
          Size
          <div className="bg-slate-500 text-white text-[10px] py-0.5 px-1 ml-2 rounded">
            BTC
          </div>
        </div>
        <div className="text-center flex text-xs items-center justify-end text-slate-500">
          Price
          <div className="bg-slate-500 text-white text-[10px] py-0.5 px-1 ml-2 rounded">
            USD
          </div>
        </div>
        <div className="flex-1 text-center flex text-xs items-center justify-center text-slate-500">
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
        <div className="text-xs text-white text-right">Spread</div>
        <div className="text-xs text-white text-right">1</div>
        <div className="text-xs text-white text-right pr-4">0.00%</div>
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

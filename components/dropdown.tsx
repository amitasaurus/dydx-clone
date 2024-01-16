'use client';

import React from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Dropdown(props: { items: string[]; title?: string }) {
  const [_item, setItem] = React.useState(props.items[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white w-24 text-sm flex justify-center items-center py-2 px-2 rounded cursor-pointer">
          {props.title ?? _item}
          <FiChevronDown className="ml-auto" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {props.items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => setItem(item)}
            className={item === _item ? 'bg-slate-100' : ''}
          >
            {item}
            {item === _item && <FiCheck className="ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

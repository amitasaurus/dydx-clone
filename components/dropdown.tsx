'use client';

import React from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Dropdown(props: {
  items: string[];
  title?: string;
  trigger?: React.ReactNode;
}) {
  const [_item, setItem] = React.useState(props.items[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {props.trigger ? (
          props.trigger
        ) : (
          <div className="flex items-center justify-center w-24 px-2 py-2 text-sm text-gray-400 rounded cursor-pointer bg-slate-900 hover:bg-slate-800 hover:text-white">
            {props.title ?? _item}
            <FiChevronDown className="ml-auto" />
          </div>
        )}
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

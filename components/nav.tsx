import React from 'react';
import Image from 'next/image';
import Dropdown from '@/components/dropdown';
import Link from 'next/link';
import { FiBell, FiHelpCircle } from 'react-icons/fi';

function Nav() {
  const active = 'Trade';
  return (
    <nav className="bg-slate-900 h-12 py-2 px-1 flex items-center">
      <Image
        src="/brand-logo.svg"
        alt="brand logo"
        width="48"
        height="32"
        className="h-8 w-12"
      />
      <div className="px-2 border-solid border-r border-l border-slate-50/10">
        <Dropdown items={['v4', 'v3']} />
      </div>
      <div className="px-2 border-solid border-r border-slate-50/10">
        <Dropdown
          items={[
            'English',
            '中文',
            '日本語',
            '한국어',
            'русский',
            'Español',
            'Deutsch',
          ]}
        />
      </div>
      <div className="flex ml-2">
        {['Trade', 'Portfolio', 'Markets', 'DYDX'].map((item, index) => (
          <Link
            href="#"
            key={index}
            className={`bg-slate-900 hover:bg-slate-800 hover:text-white w-24 text-sm flex justify-center items-center py-2 px-2 rounded cursor-pointer mr-2
            ${active === item ? 'text-white' : 'text-gray-400'}
            ${active === item ? 'bg-slate-950' : ''}`}
          >
            {item}
          </Link>
        ))}
        <Dropdown
          title="More"
          items={[
            'Documentation',
            'MintScan',
            'Community',
            'Terms of Use',
            'Privacy Policy',
            'Help',
          ]}
        />
      </div>

      <div className="flex ml-auto">
        <div className="bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white text-sm flex justify-center items-center py-2 px-2 rounded cursor-pointer mr-2">
          <FiHelpCircle />
        </div>
        <div className="bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white text-sm flex justify-center items-center py-2 px-2 rounded cursor-pointer mr-2">
          <FiBell />
        </div>
        <div className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs flex justify-center items-center py-2 px-2 rounded cursor-pointer mr-2">
          Connect Wallet
        </div>
      </div>
    </nav>
  );
}

export default Nav;

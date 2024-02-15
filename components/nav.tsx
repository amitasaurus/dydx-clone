import React from 'react';
import Image from 'next/image';
import Dropdown from '@/components/dropdown';
import Link from 'next/link';
import { FiBell, FiHelpCircle } from 'react-icons/fi';

function Nav() {
  const active = 'Trade';
  return (
    <nav className="flex items-center h-12 px-1 py-2 bg-slate-900">
      <Image
        src="/brand-logo.svg"
        alt="brand logo"
        width="48"
        height="32"
        className="w-12 h-8"
      />
      <div className="px-2 border-l border-r border-solid border-slate-50/10">
        <Dropdown items={['v4', 'v3']} />
      </div>
      <div className="px-2 border-r border-solid border-slate-50/10">
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
        <div className="flex items-center justify-center px-2 py-2 mr-2 text-sm text-gray-400 rounded cursor-pointer bg-slate-900 hover:bg-slate-800 hover:text-white">
          <FiHelpCircle />
        </div>
        <div className="flex items-center justify-center px-2 py-2 mr-2 text-sm text-gray-400 rounded cursor-pointer bg-slate-900 hover:bg-slate-800 hover:text-white">
          <FiBell />
        </div>
        <div className="flex items-center justify-center px-2 py-2 mr-2 text-xs text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-500">
          Connect Wallet
        </div>
      </div>
    </nav>
  );
}

export default Nav;

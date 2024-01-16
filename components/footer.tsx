import React from 'react';
import { GrChat } from 'react-icons/gr';
import { FiExternalLink } from 'react-icons/fi';

export default function footer() {
  return (
    <div className="bg-slate-900 border-t border-slate-50/10 w-full h-8 flex">
      <div className="bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white text-xs flex justify-center items-center rounded cursor-pointer mr-6 ml-4 px-2">
        <div className="w-2 h-2 rounded-lg bg-emerald-500 mr-2"></div>
        Operational
        <FiExternalLink className="ml-2" />
      </div>
      <div className="bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white text-xs flex justify-center items-center rounded cursor-pointer px-2">
        <GrChat className="mr-2" />
        Help & Support
      </div>
    </div>
  );
}

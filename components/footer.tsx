import React from 'react';
import { GrChat } from 'react-icons/gr';
import { FiExternalLink } from 'react-icons/fi';

export default function footer() {
  return (
    <div className="flex w-full h-8 border-t bg-slate-900 border-slate-50/10">
      <div className="flex items-center justify-center px-2 ml-4 mr-6 text-xs text-gray-400 rounded cursor-pointer bg-slate-900 hover:bg-slate-800 hover:text-white">
        <div className="w-2 h-2 mr-2 rounded-lg bg-emerald-500"></div>
        Operational
        <FiExternalLink className="ml-2" />
      </div>
      <div className="flex items-center justify-center px-2 text-xs text-gray-400 rounded cursor-pointer bg-slate-900 hover:bg-slate-800 hover:text-white">
        <GrChat className="mr-2" />
        Help & Support
      </div>
    </div>
  );
}

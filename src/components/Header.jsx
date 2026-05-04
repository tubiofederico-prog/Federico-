import { Bell, Calendar, ChevronDown } from 'lucide-react';

export function Header({ companyName = 'Grupo Andino SAC', period = 'Marzo 2026' }) {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-dark-200 flex items-center justify-between px-8 z-40">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="text-sm text-dark-500">Empresa:</span>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-dark-50 transition-all">
            <span className="font-semibold text-dark-900">{companyName}</span>
            <ChevronDown size={18} className="text-dark-400" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={18} className="text-dark-400" />
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-dark-50 transition-all">
            <span className="font-semibold text-dark-900">{period}</span>
            <ChevronDown size={18} className="text-dark-400" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 hover:bg-dark-50 rounded-lg transition-all">
          <Bell size={20} className="text-dark-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-accent flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:shadow-md transition-shadow">
          AG
        </div>
      </div>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Upload,
  Settings,
  BarChart3,
  FileText,
  History,
  Users,
  CreditCard,
  HelpCircle,
  User,
  LogOut,
} from 'lucide-react';

export function Sidebar({ onLogout }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Empresas', icon: Building2, path: '/companies' },
    { label: 'Carga de Excel', icon: Upload, path: '/upload' },
    { label: 'Parametrización', icon: Settings, path: '/parameters' },
    { label: 'Análisis', icon: BarChart3, path: '/analysis' },
    { label: 'Reportes', icon: FileText, path: '/reports' },
    { label: 'Historial', icon: History, path: '/history' },
    { label: 'Usuarios', icon: Users, path: '/users' },
    { label: 'Planes', icon: CreditCard, path: '/subscriptions' },
    { label: 'Soporte', icon: HelpCircle, path: '/support' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-dark-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-dark-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">J</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-dark-900">Janet</h1>
            <p className="text-xs text-dark-500">Análisis Contable</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto py-6 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                active
                  ? 'bg-brand-50 text-brand-600 border-l-4 border-brand-600'
                  : 'text-dark-600 hover:bg-dark-50'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Profile & Logout */}
      <div className="border-t border-dark-200 p-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-dark-600 hover:bg-dark-50 transition-all">
          <User size={20} />
          <span className="font-medium text-sm">Mi Perfil</span>
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-dark-600 hover:bg-dark-50 hover:text-red-600 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
}

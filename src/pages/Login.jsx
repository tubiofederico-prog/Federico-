import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

export function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email, name: 'Usuario Demo' }));
    navigate('/dashboard');
  };

  if (isLogin) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <h1 className="text-3xl font-bold text-dark-900 mb-2">Bienvenido a Janet</h1>
            <p className="text-dark-500">Inicia sesión en tu cuenta</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
                className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100 transition-all"
                required
              />
            </div>
            <Button type="submit" fullWidth size="lg" className="mt-6">
              Iniciar Sesión
              <ArrowRight size={18} />
            </Button>
          </form>

          <button
            onClick={() => setIsLogin(false)}
            className="w-full mt-6 text-center text-brand-600 hover:text-brand-700 font-medium transition-colors"
          >
            ← Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-dark-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <h1 className="text-2xl font-bold text-dark-900">Janet</h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-dark-900 mb-6 leading-tight">
            Análisis Contable y Financiero Automatizado
          </h2>
          <p className="text-xl text-dark-500 mb-8 leading-relaxed">
            Janet es una plataforma SaaS que automatiza el análisis contable, financiero y tributario a partir de archivos Excel. Detecta alertas fiscales, identifica gastos no deducibles y genera reportes ejecutivos en minutos.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {[
              'Análisis tributario automático',
              'Detección de gastos no deducibles',
              'Alertas financieras en tiempo real',
              'Reportes ejecutivos PDF',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-dark-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => setIsLogin(true)}
              className="text-lg px-8 py-4"
            >
              Iniciar Sesión
              <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Solicitar Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-dark-200 pt-8">
            {[
              { label: 'Empresas', value: '1,200+' },
              { label: 'Análisis Realizados', value: '50,000+' },
              { label: 'Alertas Detectadas', value: '125,000+' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-dark-900 mb-2">{stat.value}</p>
                <p className="text-dark-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-200 bg-dark-50 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-12 text-center text-dark-600">
          <p>&copy; 2026 Janet. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

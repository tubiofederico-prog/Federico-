import { CheckCircle, X } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge, StatusBadge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockSubscriptions } from '../data/mockData';

export function Subscriptions() {
  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark-900 mb-2">Planes y Suscripción</h1>
        <p className="text-dark-500">Gestiona tu plan actual y datos de facturación</p>
      </div>

      {/* Current Subscription */}
      <Card className="mb-8 border-l-4 border-brand-600">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-2">Plan Profesional</h3>
            <p className="text-dark-600 mb-4">Tu plan actual incluye análisis avanzado, API básica y soporte prioritario.</p>
            <div className="flex gap-8">
              <div>
                <p className="text-dark-500 text-sm mb-1">Próxima Renovación</p>
                <p className="font-semibold text-dark-900">10 de Mayo, 2026</p>
              </div>
              <div>
                <p className="text-dark-500 text-sm mb-1">Facturación</p>
                <p className="font-semibold text-dark-900">Mensual - $499</p>
              </div>
            </div>
          </div>
          <Badge label="Activo" variant="success" size="lg" />
        </div>
      </Card>

      {/* Plans Comparison */}
      <div>
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Planes Disponibles</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              name: 'Básico',
              price: '199',
              billing: 'mensual',
              description: 'Para pequeñas empresas',
              features: [
                { feature: 'Hasta 2 usuarios', included: true },
                { feature: 'Análisis básico', included: true },
                { feature: '10 empresas', included: true },
                { feature: 'Reportes PDF', included: true },
                { feature: 'API básica', included: false },
                { feature: 'Soporte email', included: false },
              ],
              current: false,
            },
            {
              name: 'Profesional',
              price: '499',
              billing: 'mensual',
              description: 'Para contadores y firmas',
              features: [
                { feature: 'Hasta 5 usuarios', included: true },
                { feature: 'Análisis avanzado', included: true },
                { feature: '50 empresas', included: true },
                { feature: 'Reportes PDF y Excel', included: true },
                { feature: 'API básica', included: true },
                { feature: 'Soporte email', included: true },
              ],
              current: true,
            },
            {
              name: 'Enterprise',
              price: 'Personalizado',
              billing: 'anual',
              description: 'Para grandes organizaciones',
              features: [
                { feature: 'Usuarios ilimitados', included: true },
                { feature: 'Análisis premium con IA', included: true },
                { feature: 'Empresas ilimitadas', included: true },
                { feature: 'Todos los reportes', included: true },
                { feature: 'API completa', included: true },
                { feature: 'Soporte 24/7', included: true },
              ],
              current: false,
            },
          ].map((plan, idx) => (
            <Card
              key={idx}
              className={`relative flex flex-col ${
                plan.current ? 'border-2 border-brand-600 shadow-hover' : ''
              }`}
            >
              {plan.current && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <Badge label="Plan Actual" variant="brand" />
                </div>
              )}

              <div className="mb-6 pt-2">
                <h3 className="text-2xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                <p className="text-dark-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-dark-900">${plan.price}</span>
                  <span className="text-dark-500 ml-2">/{plan.billing}</span>
                </div>
              </div>

              <div className="border-t border-dark-200 py-6 mb-6 flex-1">
                <div className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle size={18} className="text-green-600" />
                      ) : (
                        <X size={18} className="text-dark-300" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-dark-700' : 'text-dark-400 line-through'
                        }`}
                      >
                        {feature.feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {plan.current ? (
                <div className="flex gap-2">
                  <Button variant="outline" fullWidth size="sm">
                    Cambiar Plan
                  </Button>
                  <Button variant="danger" fullWidth size="sm">
                    Cancelar
                  </Button>
                </div>
              ) : (
                <Button fullWidth>
                  {plan.name === 'Enterprise' ? 'Contactar Ventas' : 'Cambiar a ' + plan.name}
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Historial de Facturación</h2>
        <Card>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-200 bg-dark-50">
                <th className="px-6 py-4 text-sm font-semibold text-dark-700">Fecha</th>
                <th className="px-6 py-4 text-sm font-semibold text-dark-700">Descripción</th>
                <th className="px-6 py-4 text-sm font-semibold text-dark-700">Monto</th>
                <th className="px-6 py-4 text-sm font-semibold text-dark-700">Estado</th>
                <th className="px-6 py-4 text-sm font-semibold text-dark-700">Acción</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: '10 Abril 2026',
                  description: 'Suscripción Plan Profesional',
                  amount: '$499.00',
                  status: 'pagado',
                },
                {
                  date: '10 Marzo 2026',
                  description: 'Suscripción Plan Profesional',
                  amount: '$499.00',
                  status: 'pagado',
                },
                {
                  date: '10 Febrero 2026',
                  description: 'Suscripción Plan Profesional',
                  amount: '$499.00',
                  status: 'pagado',
                },
              ].map((invoice, idx) => (
                <tr key={idx} className="border-b border-dark-100 hover:bg-dark-50">
                  <td className="px-6 py-4 text-sm text-dark-700">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm text-dark-700">{invoice.description}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-dark-900">{invoice.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <Badge label="Pagado" variant="success" />
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-brand-600 hover:text-brand-700 font-medium">
                      Ver Factura
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

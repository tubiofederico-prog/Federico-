import { AlertTriangle, TrendingDown, Eye } from 'lucide-react';
import { Card, MetricCard } from '../components/Card';
import { Badge, SeverityBadge } from '../components/Badge';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { mockAnalysisDetails, mockAlerts } from '../data/mockData';

export function Analysis() {
  const totalAmount = mockAnalysisDetails.reduce((acc, item) => acc + item.amount, 0);

  const columns = [
    {
      key: 'type',
      label: 'Tipo de Alerta',
      width: '30%',
      render: (value) => {
        const badgeMap = {
          tributario: 'info',
          financiero: 'warning',
        };
        return (
          <div>
            <Badge
              label={value.charAt(0).toUpperCase() + value.slice(1)}
              variant={badgeMap[value] || 'default'}
            />
          </div>
        );
      },
    },
    {
      key: 'title',
      label: 'Descripción',
      width: '35%',
    },
    {
      key: 'severity',
      label: 'Severidad',
      width: '15%',
      render: (value) => <SeverityBadge severity={value} />,
    },
    {
      key: 'date',
      label: 'Fecha',
      width: '15%',
    },
  ];

  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark-900 mb-2">Análisis Financiero y Fiscal</h1>
        <p className="text-dark-500">Revisión detallada de alertas y observaciones detectadas</p>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={AlertTriangle}
          label="Observaciones Detectadas"
          value={mockAnalysisDetails.length}
        />
        <MetricCard
          icon={TrendingDown}
          label="Monto Total en Observación"
          value={`$${(totalAmount / 1000).toFixed(0)}k`}
          color="accent"
        />
        <MetricCard
          icon={AlertTriangle}
          label="Alertas Críticas"
          value={mockAlerts.filter((a) => a.severity === 'crítico').length}
          color="accent"
        />
        <MetricCard
          icon={Eye}
          label="Porcentaje de Riesgo"
          value="32%"
          trend="down"
          trendValue="5%"
        />
      </div>

      {/* Detailed Analysis */}
      {mockAnalysisDetails.map((detail) => (
        <Card key={detail.id} className="mb-6">
          <div className="mb-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-dark-900">{detail.category}</h3>
              <SeverityBadge severity={detail.severity} />
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div>
                <p className="text-dark-500 text-sm">Monto Total</p>
                <p className="text-3xl font-bold text-dark-900">
                  ${(detail.amount / 1000).toFixed(1)}k
                </p>
              </div>
              <div>
                <p className="text-dark-500 text-sm">Porcentaje del Total</p>
                <p className="text-3xl font-bold text-dark-900">{detail.percentage}%</p>
              </div>
            </div>
          </div>

          {/* Detail Items */}
          <div className="pt-6 border-t border-dark-200">
            <h4 className="font-semibold text-dark-900 mb-4">Desglose de Observaciones</h4>
            <div className="space-y-3">
              {detail.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 px-4 bg-dark-50 rounded-lg"
                >
                  <span className="text-dark-700">{item.description}</span>
                  <span className="font-semibold text-dark-900">
                    ${(item.amount / 1000).toFixed(1)}k
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 pt-6 border-t border-dark-200">
            <div className="w-full bg-dark-100 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${
                  detail.severity === 'crítico'
                    ? 'bg-red-500'
                    : detail.severity === 'alto'
                      ? 'bg-yellow-500'
                      : detail.severity === 'medio'
                        ? 'bg-blue-500'
                        : 'bg-green-500'
                }`}
                style={{ width: `${detail.percentage}%` }}
              ></div>
            </div>
          </div>
        </Card>
      ))}

      {/* All Alerts */}
      <div>
        <h2 className="text-2xl font-bold text-dark-900 mb-4">Todas las Alertas Detectadas</h2>
        <Card>
          <Table columns={columns} data={mockAlerts} />
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <Button size="lg" variant="primary">
          Descargar Informe Detallado
        </Button>
        <Button size="lg" variant="outline">
          Exportar a Excel
        </Button>
        <Button size="lg" variant="secondary">
          Guardar para Revisar
        </Button>
      </div>
    </div>
  );
}

import { Clock, Filter } from 'lucide-react';
import { Card } from '../components/Card';
import { StatusBadge } from '../components/Badge';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { mockAnalysisHistory } from '../data/mockData';

export function History() {
  const columns = [
    {
      key: 'date',
      label: 'Fecha',
      width: '15%',
    },
    {
      key: 'company',
      label: 'Empresa',
      width: '25%',
    },
    {
      key: 'period',
      label: 'Período',
      width: '15%',
    },
    {
      key: 'user',
      label: 'Usuario',
      width: '15%',
    },
    {
      key: 'status',
      label: 'Estado',
      width: '12%',
      render: (value) => <StatusBadge status={value} />,
    },
    {
      key: 'alerts',
      label: 'Alertas',
      width: '8%',
    },
    {
      key: 'processTime',
      label: 'Tiempo de Procesamiento',
      width: '15%',
    },
  ];

  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark-900 mb-2">Historial de Análisis</h1>
        <p className="text-dark-500">Registro completo de todos los análisis realizados</p>
      </div>

      {/* Filters */}
      <Card className="mb-8 flex gap-4">
        <select className="px-4 py-3 border border-dark-200 rounded-lg bg-white text-dark-700 focus:outline-none focus:border-brand-600 transition-all cursor-pointer flex-1">
          <option>Todos los estados</option>
          <option>Completado</option>
          <option>Error</option>
        </select>
        <select className="px-4 py-3 border border-dark-200 rounded-lg bg-white text-dark-700 focus:outline-none focus:border-brand-600 transition-all cursor-pointer flex-1">
          <option>Todas las empresas</option>
          <option>Grupo Andino SAC</option>
          <option>Nova Foods Perú</option>
          <option>Inversiones Lima Norte</option>
        </select>
        <select className="px-4 py-3 border border-dark-200 rounded-lg bg-white text-dark-700 focus:outline-none focus:border-brand-600 transition-all cursor-pointer flex-1">
          <option>Últimos 30 días</option>
          <option>Últimos 7 días</option>
          <option>Hoy</option>
          <option>Personalizado</option>
        </select>
        <Button variant="secondary" icon={Filter}>
          Más Filtros
        </Button>
      </Card>

      {/* Table */}
      <Card>
        <Table
          columns={columns}
          data={mockAnalysisHistory}
          actions={(row) => [
            { label: 'Ver Detalle', onClick: () => {} },
            { label: 'Descargar', onClick: () => {} },
            { label: 'Reanalizar', onClick: () => {} },
          ]}
        />
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {[
          {
            label: 'Análisis Completados',
            value: mockAnalysisHistory.filter((h) => h.status === 'completado').length,
            icon: '✓',
            color: 'text-green-600',
          },
          {
            label: 'Análisis con Error',
            value: mockAnalysisHistory.filter((h) => h.status === 'error').length,
            icon: '✕',
            color: 'text-red-600',
          },
          {
            label: 'Tiempo Promedio',
            value: '2m 26s',
            icon: '⏱',
            color: 'text-blue-600',
          },
          {
            label: 'Total de Alertas',
            value: mockAnalysisHistory.reduce((acc, h) => acc + h.alerts, 0),
            icon: '⚠',
            color: 'text-yellow-600',
          },
        ].map((stat, idx) => (
          <Card key={idx}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dark-500 text-sm mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <span className="text-3xl opacity-20">{stat.icon}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

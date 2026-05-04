import { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge, StatusBadge } from '../components/Badge';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { mockCompanies } from '../data/mockData';

export function Companies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');

  const filteredCompanies = mockCompanies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.ruc.includes(searchTerm);
    const matchesStatus = filterStatus === 'todos' || company.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const columns = [
    {
      key: 'name',
      label: 'Empresa',
      width: '30%',
      render: (value, row) => (
        <div>
          <p className="font-semibold text-dark-900">{value}</p>
          <p className="text-sm text-dark-500">RUC: {row.ruc}</p>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Estado',
      width: '15%',
      render: (value) => <StatusBadge status={value} />,
    },
    {
      key: 'subscription',
      label: 'Plan',
      width: '15%',
      render: (value) => (
        <Badge label={value.charAt(0).toUpperCase() + value.slice(1)} variant="brand" />
      ),
    },
    {
      key: 'users',
      label: 'Usuarios',
      width: '10%',
      render: (value) => <span>{value}</span>,
    },
    {
      key: 'lastAnalysis',
      label: 'Último Análisis',
      width: '15%',
      render: (value) => <span>{value || 'Nunca'}</span>,
    },
    {
      key: 'revenue',
      label: 'Ingresos',
      width: '15%',
      render: (value) => <span>${(value / 1000000).toFixed(1)}M</span>,
    },
  ];

  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-dark-900 mb-2">Gestión de Empresas</h1>
            <p className="text-dark-500">Administra todas las empresas clientes del SaaS</p>
          </div>
          <Button size="lg" icon={Plus}>
            Nueva Empresa
          </Button>
        </div>

        {/* Filters & Search */}
        <Card className="flex gap-4">
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400"
            />
            <input
              type="text"
              placeholder="Buscar empresa o RUC..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-dark-200 rounded-lg focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border border-dark-200 rounded-lg bg-white text-dark-700 focus:outline-none focus:border-brand-600 transition-all cursor-pointer"
          >
            <option value="todos">Todos los estados</option>
            <option value="activa">Activas</option>
            <option value="vencida">Vencidas</option>
            <option value="pendiente">Pendientes</option>
          </select>
          <Button variant="secondary" icon={Filter}>
            Más Filtros
          </Button>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <Table
          columns={columns}
          data={filteredCompanies}
          actions={(row) => [
            { label: 'Ver', onClick: () => {} },
            { label: 'Editar', onClick: () => {} },
            { label: 'Análisis', onClick: () => {} },
          ]}
        />
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {[
          { label: 'Total de Empresas', value: mockCompanies.length },
          { label: 'Empresas Activas', value: mockCompanies.filter(c => c.status === 'activa').length },
          { label: 'Empresas Vencidas', value: mockCompanies.filter(c => c.status === 'vencida').length },
          { label: 'Ingresos Totales', value: `$${(mockCompanies.reduce((acc, c) => acc + c.revenue, 0) / 1000000).toFixed(1)}M` },
        ].map((stat, idx) => (
          <Card key={idx}>
            <p className="text-dark-500 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-dark-900">{stat.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

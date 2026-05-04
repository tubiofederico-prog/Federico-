import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, TrendingDown, Eye } from 'lucide-react';
import { Card, MetricCard } from '../components/Card';
import { Badge, SeverityBadge, StatusBadge } from '../components/Badge';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { mockDashboardMetrics, mockAlerts, mockFileUploads } from '../data/mockData';

const colors = ['#4f46e5', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export function Dashboard() {
  const recentFiles = mockFileUploads.slice(0, 4);
  const criticalAlerts = mockAlerts.filter(a => a.severity === 'crítico').slice(0, 5);

  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-dark-900 mb-2">Dashboard</h1>
        <p className="text-dark-500">Resumen ejecutivo de tu actividad</p>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={AlertTriangle}
          label="Operaciones Analizadas"
          value={mockDashboardMetrics.totalOperations.toLocaleString()}
          trend="up"
          trendValue="12%"
        />
        <MetricCard
          icon={AlertTriangle}
          label="Alertas Tributarias"
          value={mockDashboardMetrics.taxAlerts}
          trend="up"
          trendValue="5"
          color="accent"
        />
        <MetricCard
          icon={AlertTriangle}
          label="Alertas Financieras"
          value={mockDashboardMetrics.financialAlerts}
          trend="down"
          trendValue="2"
          color="accent"
        />
        <MetricCard
          icon={TrendingDown}
          label="Gastos No Deducibles"
          value={`$${(mockDashboardMetrics.nonDeductibleExpenses / 1000).toFixed(0)}k`}
          trend="up"
          trendValue="$8.5k"
          color="accent"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <Card className="col-span-2">
          <h3 className="text-lg font-bold text-dark-900 mb-6">Ingresos Mensuales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockDashboardMetrics.monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e8" />
              <XAxis dataKey="month" stroke="#808080" />
              <YAxis stroke="#808080" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={{ fill: '#4f46e5', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Expenses Pie Chart */}
        <Card>
          <h3 className="text-lg font-bold text-dark-900 mb-6">Gastos por Categoría</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockDashboardMetrics.expensesByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name} ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {mockDashboardMetrics.expensesByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Status & Recent Files */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* General Status */}
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-dark-900 mb-4">Estado General del Período</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">Cumplimiento Tributario</span>
                  <span className="text-sm font-semibold text-yellow-600">75%</span>
                </div>
                <div className="w-full bg-dark-100 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">Salud Financiera</span>
                  <span className="text-sm font-semibold text-green-600">88%</span>
                </div>
                <div className="w-full bg-dark-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">Documentación Completa</span>
                  <span className="text-sm font-semibold text-blue-600">92%</span>
                </div>
                <div className="w-full bg-dark-100 rounded-full h-2">
                  <div className="bg-brand-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Uploads */}
        <Card>
          <h3 className="text-lg font-bold text-dark-900 mb-6 flex items-center justify-between">
            <span>Últimas Cargas</span>
            <Eye size={18} className="text-dark-400" />
          </h3>
          <div className="space-y-4">
            {recentFiles.map((file) => (
              <div key={file.id} className="pb-4 border-b border-dark-100 last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-dark-900 text-sm">{file.filename}</p>
                    <p className="text-xs text-dark-500">{file.company}</p>
                  </div>
                  <StatusBadge status={file.status} />
                </div>
                <div className="flex justify-between text-xs text-dark-500">
                  <span>{file.records} registros</span>
                  <span>{file.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Critical Alerts */}
      <Card>
        <h3 className="text-lg font-bold text-dark-900 mb-6 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          Alertas Críticas Detectadas
        </h3>
        <div className="space-y-4">
          {criticalAlerts.map((alert) => (
            <div key={alert.id} className="pb-4 border-b border-dark-100 last:border-0 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-dark-900">{alert.title}</p>
                  <p className="text-sm text-dark-600 mt-1">{alert.description}</p>
                  <div className="flex gap-3 mt-3 text-xs text-dark-500">
                    <span>{alert.company}</span>
                    <span>•</span>
                    <span>{alert.date}</span>
                  </div>
                </div>
                <SeverityBadge severity={alert.severity} />
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" fullWidth className="mt-6">
          Ver todas las alertas
        </Button>
      </Card>
    </div>
  );
}

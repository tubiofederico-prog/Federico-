import { Download, Eye, Share2 } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockReports } from '../data/mockData';

export function Reports() {
  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark-900 mb-2">Reportes Automáticos</h1>
        <p className="text-dark-500">Visualiza y descarga reportes en PDF y Excel</p>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-2 gap-6">
        {mockReports.map((report) => (
          <Card key={report.id} hover className="flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-dark-900 mb-2">{report.name}</h3>
              <p className="text-sm text-dark-500">{report.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-dark-200">
              <div>
                <p className="text-xs text-dark-500 mb-1">Formato</p>
                <div className="flex gap-2">
                  {report.format.map((fmt, idx) => (
                    <Badge key={idx} label={fmt} variant="brand" size="sm" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-dark-500 mb-1">Tamaño</p>
                <p className="font-semibold text-dark-900">{report.size}</p>
              </div>
              <div>
                <p className="text-xs text-dark-500 mb-1">Páginas</p>
                <p className="font-semibold text-dark-900">{report.pages}</p>
              </div>
            </div>

            <div className="text-sm text-dark-500 mb-6">
              Generado: {report.date}
            </div>

            <div className="flex gap-2 mt-auto">
              <Button
                variant="outline"
                size="sm"
                icon={Eye}
                fullWidth
              >
                Vista Previa
              </Button>
              <Button
                variant="primary"
                size="sm"
                icon={Download}
                fullWidth
              >
                Descargar
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-4 gap-6 mt-12">
        {[
          { label: 'Total Reportes', value: mockReports.length },
          { label: 'Este Mes', value: mockReports.filter(r => r.date.includes('04')).length },
          { label: 'Tamaño Total', value: '8.5 MB' },
          { label: 'Descargas', value: '24' },
        ].map((stat, idx) => (
          <Card key={idx}>
            <p className="text-dark-500 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-dark-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Report Templates */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Crear Nuevo Reporte</h2>
        <Card>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                name: 'Reporte Tributario Personalizado',
                description: 'Crea un reporte tributario con parámetros personalizados',
              },
              {
                name: 'Reporte Financiero Ejecutivo',
                description: 'Reporte financiero resumido para presentación a gerencia',
              },
              {
                name: 'Análisis de Riesgo Detallado',
                description: 'Análisis exhaustivo de riesgos tributarios y financieros',
              },
            ].map((template, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-dark-200 rounded-lg hover:bg-dark-50 transition-all">
                <div>
                  <h4 className="font-semibold text-dark-900">{template.name}</h4>
                  <p className="text-sm text-dark-500 mt-1">{template.description}</p>
                </div>
                <Button variant="outline" size="sm">
                  Crear
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

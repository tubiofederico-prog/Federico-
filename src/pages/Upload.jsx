import { useState } from 'react';
import { Upload as UploadIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge, StatusBadge } from '../components/Badge';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { mockFileUploads } from '../data/mockData';

export function Upload() {
  const [dragActive, setDragActive] = useState(false);
  const [period, setPeriod] = useState('2026-03');

  const columns = [
    {
      key: 'filename',
      label: 'Archivo',
      width: '25%',
      render: (value, row) => (
        <div>
          <p className="font-semibold text-dark-900">{value}</p>
          <p className="text-sm text-dark-500">{row.company}</p>
        </div>
      ),
    },
    {
      key: 'period',
      label: 'Período',
      width: '15%',
    },
    {
      key: 'date',
      label: 'Fecha de Carga',
      width: '15%',
    },
    {
      key: 'status',
      label: 'Estado',
      width: '15%',
      render: (value, row) => (
        <div className="flex items-center gap-2">
          {value === 'aprobado' && <CheckCircle size={18} className="text-green-600" />}
          {value === 'error' && <AlertCircle size={18} className="text-red-600" />}
          <StatusBadge status={value} />
        </div>
      ),
    },
    {
      key: 'records',
      label: 'Registros',
      width: '10%',
    },
    {
      key: 'alerts',
      label: 'Alertas',
      width: '10%',
      render: (value, row) => (
        <Badge label={value.toString()} variant={value > 2 ? 'warning' : 'success'} />
      ),
    },
  ];

  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark-900 mb-2">Carga de Archivos</h1>
        <p className="text-dark-500">Sube archivos Excel para análisis automático</p>
      </div>

      {/* Upload Area */}
      <Card className="mb-8">
        <div
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDrop={() => setDragActive(false)}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
            dragActive
              ? 'border-brand-600 bg-brand-50'
              : 'border-dark-300 hover:border-brand-500'
          }`}
        >
          <UploadIcon
            size={48}
            className={`mx-auto mb-4 ${dragActive ? 'text-brand-600' : 'text-dark-400'}`}
          />
          <h3 className="text-lg font-bold text-dark-900 mb-2">
            Arrastra tu archivo Excel aquí
          </h3>
          <p className="text-dark-500 mb-6">O haz clic para seleccionar un archivo</p>
          <input type="file" accept=".xlsx,.xls" className="hidden" />
          <Button>
            Seleccionar Archivo
          </Button>
        </div>

        {/* Upload Settings */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <label className="block text-sm font-semibold text-dark-700 mb-2">Empresa</label>
            <select className="w-full px-4 py-3 border border-dark-200 rounded-lg bg-white text-dark-700 focus:outline-none focus:border-brand-600 transition-all cursor-pointer">
              <option>Grupo Andino SAC</option>
              <option>Nova Foods Perú</option>
              <option>Inversiones Lima Norte</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark-700 mb-2">Período</label>
            <input
              type="month"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:outline-none focus:border-brand-600 transition-all cursor-pointer"
            />
          </div>
        </div>

        {/* Validation Checklist */}
        <div className="mt-8 pt-8 border-t border-dark-200">
          <h4 className="font-semibold text-dark-900 mb-4">Validación de Columnas Requeridas</h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Fecha de Transacción',
              'Número de Comprobante',
              'Descripción',
              'Monto',
              'Tipo de Movimiento',
              'Cuenta Contable',
            ].map((col, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <CheckCircle size={18} className="text-green-600" />
                <span className="text-dark-700">{col}</span>
              </div>
            ))}
          </div>
        </div>

        <Button fullWidth size="lg" className="mt-8">
          Procesar Análisis
        </Button>
      </Card>

      {/* Upload History */}
      <div>
        <h2 className="text-2xl font-bold text-dark-900 mb-4">Historial de Cargas</h2>
        <Card>
          <Table columns={columns} data={mockFileUploads} />
        </Card>
      </div>
    </div>
  );
}

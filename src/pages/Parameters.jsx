import { useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockParameters } from '../data/mockData';

export function Parameters() {
  const [parameters, setParameters] = useState(mockParameters);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const startEdit = (param) => {
    setEditingId(param.id);
    setEditValue(param.value);
  };

  const saveEdit = (id) => {
    setParameters(
      parameters.map((p) => (p.id === id ? { ...p, value: editValue } : p))
    );
    setEditingId(null);
  };

  const toggleActive = (id) => {
    setParameters(
      parameters.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    );
  };

  const groupedParameters = parameters.reduce((acc, param) => {
    if (!acc[param.category]) {
      acc[param.category] = [];
    }
    acc[param.category].push(param);
    return acc;
  }, {});

  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark-900 mb-2">Parametrización</h1>
        <p className="text-dark-500">Configura reglas tributarias, financieras y contables</p>
      </div>

      {/* Parameters by Category */}
      {Object.entries(groupedParameters).map(([category, params]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">{category}</h2>
          <div className="space-y-3">
            {params.map((param) => (
              <Card key={param.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-dark-900">{param.name}</h3>
                  <p className="text-sm text-dark-500 mt-1">
                    Tipo: {param.type}
                  </p>
                </div>

                {editingId === param.id ? (
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="px-4 py-2 border border-dark-200 rounded-lg focus:outline-none focus:border-brand-600 transition-all"
                      autoFocus
                    />
                    <button
                      onClick={() => saveEdit(param.id)}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all"
                    >
                      <Save size={20} />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-bold text-dark-900">{param.value}</p>
                    </div>
                    <button
                      onClick={() => startEdit(param)}
                      className="p-2 text-dark-600 hover:bg-dark-50 rounded-lg transition-all"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => toggleActive(param.id)}
                      className={`w-12 h-6 rounded-full transition-all flex items-center p-1 ${
                        param.active ? 'bg-green-500' : 'bg-dark-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          param.active ? 'translate-x-6' : ''
                        }`}
                      ></div>
                    </button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Summary */}
      <Card className="grid grid-cols-3 gap-8 mt-12">
        {[
          {
            label: 'Parámetros Activos',
            value: parameters.filter((p) => p.active).length,
            color: 'text-green-600',
          },
          {
            label: 'Parámetros Inactivos',
            value: parameters.filter((p) => !p.active).length,
            color: 'text-yellow-600',
          },
          {
            label: 'Total de Parámetros',
            value: parameters.length,
            color: 'text-blue-600',
          },
        ].map((stat, idx) => (
          <div key={idx}>
            <p className="text-dark-500 text-sm mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

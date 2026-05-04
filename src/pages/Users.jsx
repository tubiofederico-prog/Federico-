import { Plus, Lock, Trash2 } from 'lucide-react';
import { Card } from '../components/Card';
import { StatusBadge, Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { mockUsers } from '../data/mockData';

export function Users() {
  const columns = [
    {
      key: 'name',
      label: 'Usuario',
      width: '25%',
      render: (value, row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-600 to-accent flex items-center justify-center text-white text-xs font-bold">
            {row.avatar}
          </div>
          <div>
            <p className="font-semibold text-dark-900">{value}</p>
            <p className="text-xs text-dark-500">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Rol',
      width: '20%',
      render: (value) => {
        const roleMap = {
          administrador: 'danger',
          contador: 'info',
          analista: 'brand',
          gerente: 'warning',
        };
        return (
          <Badge
            label={value.charAt(0).toUpperCase() + value.slice(1)}
            variant={roleMap[value] || 'default'}
          />
        );
      },
    },
    {
      key: 'status',
      label: 'Estado',
      width: '15%',
      render: (value) => <StatusBadge status={value} />,
    },
    {
      key: 'lastAccess',
      label: 'Último Acceso',
      width: '25%',
    },
  ];

  return (
    <div className="ml-64 pt-24 px-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-dark-900 mb-2">Gestión de Usuarios</h1>
            <p className="text-dark-500">Administra usuarios internos y sus permisos</p>
          </div>
          <Button size="lg" icon={Plus}>
            Invitar Usuario
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="mb-8">
        <Table
          columns={columns}
          data={mockUsers}
          actions={(row) => [
            { label: 'Editar', onClick: () => {} },
            { label: 'Permisos', onClick: () => {} },
            { label: 'Eliminar', onClick: () => {} },
          ]}
        />
      </Card>

      {/* Roles & Permissions */}
      <div>
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Roles y Permisos</h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              role: 'Administrador',
              description: 'Acceso total a la plataforma',
              permissions: ['Gestionar empresas', 'Gestionar usuarios', 'Ver reportes', 'Editar parámetros'],
              color: 'danger',
            },
            {
              role: 'Contador',
              description: 'Acceso a análisis y reportes',
              permissions: ['Cargar archivos', 'Ver análisis', 'Descargar reportes', 'Editar parametrización'],
              color: 'info',
            },
            {
              role: 'Analista',
              description: 'Acceso a lectura y análisis',
              permissions: ['Ver análisis', 'Generar reportes', 'Ver historial', 'Cargar archivos'],
              color: 'brand',
            },
            {
              role: 'Gerente',
              description: 'Acceso a reportes ejecutivos',
              permissions: ['Ver dashboard', 'Descargar reportes', 'Ver análisis', 'Ver empresas'],
              color: 'warning',
            },
          ].map((roleInfo, idx) => (
            <Card key={idx}>
              <div className="mb-4">
                <Badge label={roleInfo.role} variant={roleInfo.color} size="lg" />
              </div>
              <p className="text-dark-600 text-sm mb-4">{roleInfo.description}</p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-dark-700 mb-3">Permisos:</p>
                {roleInfo.permissions.map((perm, pidx) => (
                  <div key={pidx} className="flex items-center gap-2 text-xs text-dark-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                    {perm}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {[
          { label: 'Total de Usuarios', value: mockUsers.length },
          { label: 'Usuarios Activos', value: mockUsers.filter(u => u.status === 'activo').length },
          { label: 'Usuarios Inactivos', value: mockUsers.filter(u => u.status === 'inactivo').length },
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

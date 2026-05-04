import { MessageSquare, BookOpen, Play, Plus } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge, StatusBadge } from '../components/Badge';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { mockSupportTickets } from '../data/mockData';

export function Support() {
  const columns = [
    {
      key: 'id',
      label: 'ID',
      width: '10%',
      render: (value) => <span className="font-semibold text-brand-600">{value}</span>,
    },
    {
      key: 'subject',
      label: 'Asunto',
      width: '45%',
    },
    {
      key: 'status',
      label: 'Estado',
      width: '15%',
      render: (value) => <StatusBadge status={value} />,
    },
    {
      key: 'priority',
      label: 'Prioridad',
      width: '15%',
      render: (value) => {
        const priorityMap = {
          alto: 'danger',
          medio: 'warning',
          bajo: 'success',
        };
        return <Badge label={value.charAt(0).toUpperCase() + value.slice(1)} variant={priorityMap[value]} />;
      },
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-dark-900 mb-2">Centro de Ayuda y Soporte</h1>
            <p className="text-dark-500">Encuentra respuestas y contacta con nuestro equipo</p>
          </div>
          <Button size="lg" icon={Plus}>
            Nuevo Ticket
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card hover className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            <BookOpen size={24} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-dark-900 mb-1">Guías y Tutoriales</h3>
            <p className="text-sm text-dark-500">Aprende cómo usar Janet</p>
          </div>
        </Card>
        <Card hover className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
            <Play size={24} className="text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-dark-900 mb-1">Videos Demostración</h3>
            <p className="text-sm text-dark-500">Mira nuestros tutoriales en video</p>
          </div>
        </Card>
        <Card hover className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
            <MessageSquare size={24} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-dark-900 mb-1">Contacto Directo</h3>
            <p className="text-sm text-dark-500">Habla con nuestro equipo</p>
          </div>
        </Card>
      </div>

      {/* FAQ */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-3">
          {[
            {
              q: '¿Cómo cargo un archivo Excel?',
              a: 'Dirígete a la sección "Carga de Archivos", arrastra tu archivo Excel o selecciónalo. El sistema validará automáticamente las columnas requeridas.',
            },
            {
              q: '¿Cuánto tarda el análisis?',
              a: 'El análisis típicamente tarda entre 1 a 5 minutos dependiendo del tamaño del archivo y la cantidad de registros.',
            },
            {
              q: '¿Puedo descargar los reportes?',
              a: 'Sí, todos los reportes pueden descargarse en formato PDF o Excel desde la sección "Reportes".',
            },
            {
              q: '¿Qué pasa si tengo un error?',
              a: 'Verás un mensaje de error específico. Consulta la sección de validación o contacta con soporte si necesitas ayuda.',
            },
          ].map((faq, idx) => (
            <Card key={idx}>
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between font-semibold text-dark-900 hover:text-brand-600 transition-colors">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-dark-600 mt-4">{faq.a}</p>
              </details>
            </Card>
          ))}
        </div>
      </div>

      {/* Support Tickets */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Mis Tickets de Soporte</h2>
        <Card>
          <Table columns={columns} data={mockSupportTickets} />
        </Card>
      </div>

      {/* Documentation Links */}
      <div>
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Documentación</h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { title: 'Guía de Inicio Rápido', description: 'Primeros pasos con Janet', link: '#' },
            { title: 'Manual de Análisis', description: 'Cómo interpretar resultados', link: '#' },
            { title: 'Integración API', description: 'Documentación técnica completa', link: '#' },
            { title: 'Preguntas Frecuentes', description: 'Respuestas a tus dudas', link: '#' },
          ].map((doc, idx) => (
            <Card key={idx} hover>
              <h3 className="font-bold text-dark-900 mb-2">{doc.title}</h3>
              <p className="text-dark-500 text-sm mb-4">{doc.description}</p>
              <a href={doc.link} className="text-brand-600 hover:text-brand-700 font-medium text-sm">
                Leer más →
              </a>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <Card className="mt-12 bg-gradient-to-r from-brand-50 to-accent/10 border border-brand-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-dark-900 mb-4">¿Necesitas ayuda adicional?</h3>
          <p className="text-dark-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 a 18:00 (Hora de Perú) para ayudarte.
          </p>
          <div className="flex gap-4 justify-center">
            <Button>
              Enviar Email
            </Button>
            <Button variant="outline">
              Agendar Llamada
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

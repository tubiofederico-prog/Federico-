export function Badge({ label, variant = 'default', size = 'md' }) {
  const variants = {
    default: 'bg-dark-100 text-dark-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    brand: 'bg-brand-50 text-brand-700',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`inline-block rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {label}
    </span>
  );
}

export function StatusBadge({ status }) {
  const statusMap = {
    activa: { label: 'Activa', variant: 'success' },
    vencida: { label: 'Vencida', variant: 'danger' },
    pendiente: { label: 'Pendiente', variant: 'warning' },
    completado: { label: 'Completado', variant: 'success' },
    procesando: { label: 'Procesando', variant: 'info' },
    aprobado: { label: 'Aprobado', variant: 'success' },
    error: { label: 'Error', variant: 'danger' },
    resuelto: { label: 'Resuelto', variant: 'success' },
    abierto: { label: 'Abierto', variant: 'info' },
    activo: { label: 'Activo', variant: 'success' },
    inactivo: { label: 'Inactivo', variant: 'warning' },
  };

  const config = statusMap[status] || { label: status, variant: 'default' };
  return <Badge label={config.label} variant={config.variant} />;
}

export function SeverityBadge({ severity }) {
  const severityMap = {
    crítico: { label: '🔴 Crítico', variant: 'danger' },
    alto: { label: '🟠 Alto', variant: 'warning' },
    medio: { label: '🟡 Medio', variant: 'warning' },
    bajo: { label: '🟢 Bajo', variant: 'success' },
  };

  const config = severityMap[severity] || { label: severity, variant: 'default' };
  return <Badge label={config.label} variant={config.variant} />;
}

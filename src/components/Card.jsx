export function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`
        bg-white rounded-xl border border-dark-200 p-6
        ${hover ? 'hover:shadow-hover transition-shadow cursor-pointer' : 'shadow-card'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function MetricCard({ icon: Icon, label, value, trend, trendValue, color = 'brand' }) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-dark-500 mb-2">{label}</p>
          <h3 className="text-3xl font-bold text-dark-900">{value}</h3>
          {trend && (
            <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? '↑' : '↓'} {trendValue} vs mes anterior
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg bg-${color}-50 flex items-center justify-center`}>
          <Icon size={24} className={`text-${color}-600`} />
        </div>
      </div>
    </Card>
  );
}

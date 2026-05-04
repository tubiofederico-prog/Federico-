export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
  icon: Icon,
}) {
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-card hover:shadow-hover',
    secondary: 'bg-dark-100 text-dark-900 hover:bg-dark-200',
    outline: 'border border-dark-300 text-dark-900 hover:bg-dark-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'text-dark-600 hover:bg-dark-50',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center gap-2 rounded-lg font-semibold transition-all
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full justify-center' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
}

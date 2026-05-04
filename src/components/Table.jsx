export function Table({ columns, data, actions }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-dark-200 bg-dark-50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 text-sm font-semibold text-dark-700"
                style={{ width: col.width }}
              >
                {col.label}
              </th>
            ))}
            {actions && <th className="px-6 py-4 text-sm font-semibold text-dark-700">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-dark-100 hover:bg-dark-50 transition-colors"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-6 py-4 text-sm text-dark-700">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    {actions(row).map((action, idx) => (
                      <button
                        key={idx}
                        onClick={action.onClick}
                        className="text-brand-600 hover:text-brand-700 font-medium transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

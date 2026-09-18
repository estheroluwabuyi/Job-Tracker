function TableSkeleton({ rows = 5, columns = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="border-b border-border last:border-b-0 animate-pulse"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex} className="px-8 py-5">
              <div className="h-10 rounded bg-border/60" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableSkeleton;

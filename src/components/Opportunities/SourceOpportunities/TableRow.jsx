export default function TableRow({ item }) {
  return (
    <tr className="border-b">
      <td className="py-3">{item.name}</td>
      <td>{item.state}</td>
      <td>{item.sector}</td>
      <td className="text-green-600 font-semibold">{item.match}</td>
      <td>{item.value}</td>
      <td>{item.deadline}</td>
      <td className="truncate max-w-xs">{item.desc}</td>
      <td>
        <button className="bg-gray-100 px-3 py-1 rounded-lg">
          Add to pipeline
        </button>
      </td>
      <td>
        <button className="border px-3 py-1 rounded-lg">View Analysis</button>
      </td>
    </tr>
  );
}

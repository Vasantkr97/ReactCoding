import { useEffect, useState } from "react";

interface Item {
  id: number;
  title: string;
}

const data: Item[] = Array.from({ length: 50 }, (_, i) => ({
  id: i+1,
  title: `Item ${i + 1}`,
}))

function App() {
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState<Item[]>([]);
  const pageSize: number = 5;
  const totalItems: number = 50;
  const totalPages: number = Math.ceil(totalItems/pageSize);

  useEffect(()=>{
      const start = (page-1)*pageSize;
      const end = start + pageSize;
      setItems(data.slice(start, end));

  },[page])

  return (
    <div className="max-w-md mx-auto p-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="p-4 bg-gray-100 rounded shadow-sm">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p-1, 1))}  
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p+1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App
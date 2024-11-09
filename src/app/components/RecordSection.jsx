export default function RecordSection({ currentMonth, setCurrentMonth, renderSchedules }) {
    return (
      <div className="max-w-sm mx-auto">
        <h2 className="font-bold mb-4 text-xl">記録</h2>
        <div className="flex space-x-4">
            <button
                className={`px-4 py-2 rounded ${currentMonth === "july" ? "bg-black text-white" : "bg-gray-200"}`}
                onClick={() => setCurrentMonth("july")}
            >
                7月
            </button>
            <button
                className={`px-4 py-2 rounded ${currentMonth === "august" ? "bg-black text-white" : "bg-gray-200"}`}
                onClick={() => setCurrentMonth("august")}
            >
                8月
            </button>
            <button
                className={`px-4 py-2 rounded ${currentMonth === "september" ? "bg-black text-white" : "bg-gray-200"}`}
                onClick={() => setCurrentMonth("september")}
            >
                9月
            </button>
            <button
                className={`px-4 py-2 rounded ${currentMonth === "october" ? "bg-black text-white" : "bg-gray-200"}`}
                onClick={() => setCurrentMonth("october")}
            >
                10月
            </button>
            <button
                className={`px-4 py-2 rounded ${currentMonth === "november" ? "bg-black text-white" : "bg-gray-200"}`}
                onClick={() => setCurrentMonth("november")}
            >
                11月
            </button>
        </div>
        <div className="mt-4">{renderSchedules(currentMonth)}</div>
      </div>
    );
  }
  
import { useState } from "react";
import useTimer from "./hooks/useTimer";

function App() {
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const { secondsLeft } = useTimer({
    hours,
    minutes,
    seconds,
    started,
    setStarted
  });

  const handleReset = () => {
    setStarted(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const handleUserInput = (e: any, type: string) => {
    let value = Number(e.target.value);
    if (type === "seconds") {
      setSeconds(value);
    } else if (type === "minutes") {
      setMinutes(value);
    } else {
      setHours(value);
    }
  };

  const handleStart = () => {
    if (seconds || minutes || hours) {
      setStarted(true);
    } else {
      setStarted(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg w-96">
        {started ? (
              <div className="space-y-6">
                <div className="flex justify-center gap-4 text-6xl font-bold text-blue-600">
                  <div className="flex items-center">
                    <p className="text-7xl">{Math.floor(secondsLeft / 3600)}</p>
                    <span className="text-4xl mx-2">:</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-7xl">{Math.floor((secondsLeft % 3600) / 60)}</p>
                    <span className="text-4xl mx-2">:</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-7xl">{secondsLeft % 60}</p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Reset
                </button>
              </div>
            ) : (
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <label className="block text-lg">H:</label>
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => handleUserInput(e, "hours")}
                  className="w-16 text-center p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-lg">M:</label>
                <input
                  type="number"
                  value={minutes}
                  onChange={(e) => handleUserInput(e, "minutes")}
                  className="w-16 text-center p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-lg">S:</label>
                <input
                  type="number"
                  value={seconds}
                  onChange={(e) => handleUserInput(e, "seconds")}
                  className="w-16 text-center p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              onClick={handleStart}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Start Timer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

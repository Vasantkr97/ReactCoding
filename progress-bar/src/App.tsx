import { useEffect, useState } from "react";
import ProgresBar from "./components/ProgresBar";


function App() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => ( prev >= 100 ? 0 : prev + 10))
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl mb-4">Progress: {progress}%</h1>
        <div className="w-2/3">
          <ProgresBar progress={progress} />
        </div>
      </div>
    </>
  )
}

export default App

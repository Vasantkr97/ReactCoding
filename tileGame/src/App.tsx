import { useEffect, useState } from "react";

type TileProps = {
  index: number;
  isFilled: boolean;
  onClick: (index: number) => void;
}

const Tile: React.FC<TileProps> = ({ index, isFilled, onClick}) => {
  return (
    <div
      className={`flex items-center justify-center h-20 w-20 m-2 text-xl font-bold rounded-lg trasition-colors duration-300 cursor-pointer
        ${isFilled ? "bg-blue-500 text-white shadow-md transform scale-105" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}
      `}
      onClick={() => onClick(index)}
    >
      {index+1}
    </div>
  )
}


const App = () => {
  const [clickedTiles, setClickedTiles] = useState<number[]>([]);
  const [removeTiles, setRemoveTiles] = useState<boolean>(false);

  const handleTileClick =(index: number) => {
    if (index !== 4 && !clickedTiles.includes(index)) {
      setClickedTiles((prev) => {
        const newTileArray = [...prev, index];

        if (newTileArray.length === 8) {
          setRemoveTiles(true);
        }
        return newTileArray
      })
    }
  }

  useEffect(()=>{
    let interval: ReturnType<typeof setInterval>;

    if (removeTiles) {
      let interval = setInterval(() => {
        setClickedTiles((prev) => {
          if (prev.length === 0) {
            clearInterval(interval);
            setRemoveTiles(false)
            return prev
          }
          //Remove the last tile from the Array (in reverse order of clicks)
          const newTileArray = prev.slice(0,-1);
          return newTileArray
        })
      },500)
    }

    return () => clearInterval(interval)
  }, [removeTiles])


  const renderTiles = () => {
    const tiles = [];
    for (let i=0; i<9; i++) {
      tiles.push(
        <Tile 
          key={i}
          index={i}
          isFilled={clickedTiles.includes(i) && i != 4}
          onClick={handleTileClick}
         />
      )
    }
    return tiles
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">Tile Game</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Click on the tiles to fill them. When all outer tiles are filled, they will automatically clear.
      </p>
      <div className="grid grid-cols-3 gap-2 bg-white p-6 rounded-xl shadow-lg">
        {renderTiles()}
      </div>
    </div>
  )
}

export default App;

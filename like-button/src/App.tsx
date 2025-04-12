import { useState } from "react";
import { Heart} from "lucide-react";

const App = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  const toggleLike =() => {
    setLiked(!liked)
    setLikes((prev) => prev + (liked ? -1 : 1))
  }
  

  return (
    <div className="flex h-screen justify-center items-center">
      <button onClick={toggleLike} className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all 
        ${liked ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-600"}
        hover:scale-105`}>
          
          <Heart className={`w-5 h-5 ${liked ? "fill-red-500" : ""}`} />
          <span className="font-medium">{likes}</span>
      </button>
    </div>
  )

};

export default App
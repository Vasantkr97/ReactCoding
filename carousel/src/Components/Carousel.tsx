import { useState } from "react";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
        "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg",
    ];

    const handlePrevClick = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="relative w-[500px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                <img 
                    src={images[activeIndex]} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                />
                {/* Navigation Buttons */}
                <button 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black/70 transition"
                    onClick={handlePrevClick}
                >
                    ◀
                </button>
                <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black/70 transition"
                    onClick={handleNextClick}
                >
                    ▶
                </button>
            </div>
            {/* Indicator Dots */}
            <div className="flex mt-4 space-x-2"> 
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-blue-500 scale-110" : "bg-gray-400"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

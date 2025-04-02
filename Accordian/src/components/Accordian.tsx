import { useState } from "react";

const Accordion = () => {
  const [clickedAccordion, setClickedAccordion] = useState<number | null>(null);

  const data = [
    { title: "Title 1", content: "Content for section 1" },
    { title: "Title 2", content: "Content for section 2" },
    { title: "Title 3", content: "Content for section 3" },
    { title: "Title 4", content: "Content for section 4" },
  ];

  const handleOnClick = (index: number) => {
    setClickedAccordion(clickedAccordion === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 space-y-2">
      {data.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-md">
          {/* Accordion Header */}
          <button
            className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 font-medium text-lg transition-all duration-300 flex justify-between items-center"
            onClick={() => handleOnClick(index)}
          >
            {item.title}
            <span className={`transform transition-transform ${clickedAccordion === index ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>

          {/* Accordion Content */}
          {clickedAccordion === index && (
            <div className="p-4 bg-white border-t text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

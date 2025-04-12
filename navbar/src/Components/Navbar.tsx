import { useState } from "react";

const navItems = [
    { id: "option01", title: "Option 01" },
    { id: "option02", title: "Option 02" },
    { id: "option03", title: "Option 03" },
    { id: "option04", title: "Option 04" },
    { id: "option05", title: "Option 05" },
  ];

const Navbar = () => {
    const [activeId, setActiveId] = useState<string>("option01")

    return (
        <div className="w-full py-4 ">
            <div className="flex flex-row justify-center items-center gap-4">
                {navItems.map((item,index) => (
                    <div key={index} 
                        onClick={() => setActiveId(item.id)}
                        className={`cursor-pointer pb-1 ${activeId === item.id ? "border-b-2 border-black font-semibold" : " text-gray-500"}`}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Navbar
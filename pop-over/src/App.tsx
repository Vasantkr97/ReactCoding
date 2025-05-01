import { useRef, useState } from "react";
import { useClickOutSide } from "./Hooks/useClickOutside";

export default function PopOver() {
  const [open, setOpen] = useState(false);
  const popOverRef = useRef();

  useClickOutSide(popOverRef, () => setOpen(false))

  return (
    <div className="relative inline-block text-left" ref={popOverRef}>
      <button
        onClick={() => setOpen(!open)}
        className=""
      >
        Open PopOver
      </button>
      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-2 px-4">
            <p>This is your popOver content!</p>
          </div>
        </div>
      )}
    </div>
  )
}
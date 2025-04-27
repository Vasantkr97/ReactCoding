import { ChangeEvent, useState } from "react";



function App() {
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const generatePassword = () => {
    let chars = "";
    if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (chars.length === 0) {
      setPassword("Please select at least one option!");
      return;
    };

    let newPassword = "";
    for (let i=0; i<length; i++) {
      const randomIndex = Math.floor(Math.random()*chars.length);
      newPassword += chars[randomIndex];
    };

    setPassword(newPassword);
  };

  const handleLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value))
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, setState: (value: boolean) => void) => {
    setState(e.target.checked)
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Password Generator 🔒</h1>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password Length: {length}</label>
          <input 
            type="range" 
            min="6"
            max="32"
            value={length}
            onChange={handleLengthChange}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <label className="flex items-center gap-2">
            <input 
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => handleCheckboxChange(e, setIncludeUppercase)}
            />
            Uppercase
          </label>
          <label className="flex items-center gap-2">
            <input 
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => handleCheckboxChange(e, setIncludeLowercase)}
            />
            Lowercase
          </label>
          <label className="flex items-center  gap-2">
            <input 
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => handleCheckboxChange(e, setIncludeNumbers)}
            />
            Numbers
          </label>
          <label className="flex items-center  gap-2">
            <input 
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => handleCheckboxChange(e, setIncludeSymbols)}
            />
            Symbols
          </label>

        </div>

        <button 
          onClick={generatePassword}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-2xl transition">
          Generate Password
        </button>

        {password && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl text-center select-all break-words">
            <p>{password}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
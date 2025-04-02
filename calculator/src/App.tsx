import { useState } from "react";

function App() {

  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | number>("");
  const [preResult, setPreResult] = useState<number | null>(null)

  const handleInput = (value: string) => {
    if (result !== "" && preResult !== null) {
      setInput(preResult.toString() + value);
      setResult("")
    } else {
      setInput((prev) => prev + value);
    }
    
  };

  const clearInput = () => {
    setInput("");
    setResult("");
    setPreResult(null)
  };

  const calculateResult =() => {
    try {
      const calResult = eval(input);
      
      if(isNaN(calResult) || !isFinite(calResult)) {
        setResult("error");
      } else {
        setResult(calResult)
        setPreResult(calResult);
      }
    } catch {
      setResult("input Input")
    }
  }

  // const calculateResult = () => {
  //   let num1: string = "";
  //   let num2: string = "";
  //   let operator: string = "";

  //   for (let i=0; i<input.length; i++) {
  //     const char = input[i]
  //     if (["+", "-", "/", "*"].includes(char)) {
  //       operator = char;
  //     } else if (!operator) {
  //       num1 += char
  //     } else {
  //       num2 += char
  //     }
  //   }

  //   num1 = parseFloat(num1)
  //   num2 = parseFloat(num2);

  //   if (isNaN(num1) || isNaN(num2)) {
  //     setResult("Invalid Input");
  //     return;
  //   }

  //   let calResult: number | string = 0;

  //   if (operator === "+") calResult = num1 + num2;
  //   else if (operator === "-") calResult = num1 - num2;
  //   else if (operator === "*") calResult = num1*num2;
  //   else if (operator === "/") calResult = num2 !== 0 ? num1/num2 : "Error";
  //   else {
  //     setResult("invalid Operation")
  //     return 
  //   }
  //   setResult(calResult)

  //   if (typeof calculateResult === "number") {
  //     setPreResult(calculateResult)
  //   }
  // }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="w-80 p-6 rounded-lg shadow-lg text-center">
        <input 
          type="text"
          value={input}
          className="w-full p-3 text-right border border-gray-300 rounded-md mb-2 text-xl "
        />
        <div className="text-lg font-semibold mb-2">Result: {result}</div>
        <div className="grid grid-cols-4 gap-2">
          {
            [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "C", "="].map((btn) => (
              <button
                key={btn}
                className={`p-3 rounded-md text-lg font-semibold ${
                  ["+", "-", "*", "/"].includes((String(btn)))
                    ? "bg-blue-500 text-white"
                    : btn === "C"
                    ? "bg-red-500 text-white"
                    : btn === "="
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                } hover:opacity-80`}
                onClick={
                  btn === "C"
                    ? clearInput 
                    : btn === "="
                    ? calculateResult 
                    : (() => handleInput(btn.toString()))

                }
              >
                {btn}
              </button>
            ))
          }
        </div>
        </div>
      </div>
    </>
  )
}

export default App
      
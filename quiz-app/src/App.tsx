import { useState } from "react";

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}


function App() {

  const questions: QuestionType[] = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "Who wrote 'To be, or not to be'?",
      options: ["Shakespeare", "Hemingway", "Tolkien", "Twain"],
      answer: "Shakespeare",
    },
  ]

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(Array(questions.length).fill(""));
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [gameComplete, setGameComplete] = useState<boolean>(false);

  const handleQuizRestart = () => {
    setGameComplete(false);
    setActiveQuestionIndex(0);
    setCurrentScore(0);
    setSelectedOptions(Array(questions.length).fill(""))
  }


  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white">
        <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-full max-w-md">
          {
            gameComplete ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Your Score: {currentScore}</h2>
                <div className="space-y-4">
                  {
                    questions.map((question, index) => (
                      <div key={index} className="border p-2 rounded-lg">
                        <div className="font-semibold">{question.question}</div>
                        <div>Your Answer: {selectedOptions[index]}</div>
                        <div>Correct Answer: {question.answer}</div>
                      </div>
                    ))
                  }
                </div>
                <button 
                  onClick={handleQuizRestart}
                  className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                    Restart Quiz
                </button>
              </div>
            ) : (

            )
          }
        </div>
      </div>
    </>
  )
}

export default App

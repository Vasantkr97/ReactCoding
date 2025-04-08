import Dropdown from "./components/Dropdown"

const App = () => {


    const colorOptions = [
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red"},
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
        { value: "Orange", label: "Orange"}
    ];

    const handleColorChange = (option: { value: string, label: string }) => {
        console.log("selected Color: ", option.label)
    }


  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">Styled Dropdown</h1>
        <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-700">Primary Variant</h2>
            <Dropdown 
                label="select a color"
                options={colorOptions}
                onChange={handleColorChange}
                className="w-full"
                variant="primary"
            />
        </div>
    </div>
  )
}

export default App
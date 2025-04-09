import { ChangeEvent } from "react";

// Create a separate InputField component
const InputField = ({
  label,
  type,
  name,
  value,
  error,
  onChange,
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-400"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "./Components/InputField";

type UserInput = {
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
};


export default function App() {
  const [userInput, setUserInput] = useState<UserInput>({
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<UserInput>>({});

  const validateInputs = () => {

    const newErrors: Partial<UserInput> = {};
    
    if (userInput.firstName.trim().length < 3) {
      newErrors.firstName = "First name must be at least 3 characters";
    }
    if (userInput.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }
    if (!/^\d{10}$/.test(userInput.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (userInput.password.trim().length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
      alert("✅ Form submitted successfully!");
    } else {
      alert("❌ Fix the errors and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">📝 Sign Up Form</h2>
        
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={userInput.firstName}
          error={errors.firstName}
          onChange={handleInputChange}
        />
        
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={userInput.lastName}
          error={errors.lastName}
          onChange={handleInputChange}
        />
        
        <InputField
          label="Mobile"
          type="text"
          name="mobile"
          value={userInput.mobile}
          error={errors.mobile}
          onChange={handleInputChange}
        />
        
        <InputField
          label="Password"
          type="password"
          name="password"
          value={userInput.password}
          error={errors.password}
          onChange={handleInputChange}
        />
        
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
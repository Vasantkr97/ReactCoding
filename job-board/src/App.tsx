import { useEffect, useState } from "react";
import Card from "./Components/Card";

interface APICandidate {
  id: number;
  name: string;
  phone: number;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

function App() {
  const [candidates, setCandidates] = useState<APICandidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setCandidates(result);
      } catch (error) {
        console.log("Failed to fetch candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="p-4 space-y-4">
      {candidates.length > 0 ? (
        candidates.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            phone={item.phone}
            email={item.email}
            address={`${item.address.street}, ${item.address.city}, ${item.address.zipcode}`}
            company={item.company.name}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;

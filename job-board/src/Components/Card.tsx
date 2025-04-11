interface CardProps {
  name: string;
  phone: number;
  email: string;
  address: string;
  company: string;
}

const Card = ({ name, phone, email, address, company }: CardProps) => {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white space-y-2">
      <div><strong>Name:</strong> {name}</div>
      <div><strong>Phone:</strong> {phone}</div>
      <div><strong>Email:</strong> {email}</div>
      <div><strong>Address:</strong> {address}</div>
      <div><strong>Company:</strong> {company}</div>
    </div>
  );
};

export default Card;

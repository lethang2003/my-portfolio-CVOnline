export default function Header({ fullName, position, email, phone, github, address }: any) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl font-bold">{fullName}</h1>
      <p className="text-xl text-gray-600">{position}</p>
      <p className="mt-2">{email} • {phone}</p>
      <a href={github} target="_blank" className="text-blue-600 hover:underline block mt-1">
        {github}
      </a>
      <p className="text-sm text-gray-500">{address}</p>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Hivox</Link>
      <Link to="/login" className="text-green-600 font-semibold">Login</Link>
    </header>
  );
}
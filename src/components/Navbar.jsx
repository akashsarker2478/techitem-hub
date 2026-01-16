import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">TechItem Hub</Link>
        </div>

        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/items" className="hover:underline">Items</Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} TechItem Hub. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-400">
          Made with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
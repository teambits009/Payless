import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">© 2025 BNPL System. All rights reserved.</p>
        <Link href="/support" className="text-gray-400 hover:text-white">Support</Link>
      </div>
    </footer>
  );
}
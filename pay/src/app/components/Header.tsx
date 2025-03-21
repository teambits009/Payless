"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });
    return () => authListener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="BNPL Logo" width={120} height={40} className="object-contain" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
              <span className="text-gray-700">Hi, {user.email}</span>
              <button onClick={handleLogout} className="text-blue-600 hover:underline">Log Out</button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-blue-600 hover:underline">Log In</Link>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Sign Up</Link>
            </>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/dashboard" className="block py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
          {user ? (
            <button onClick={handleLogout} className="block py-2 text-blue-600 hover:underline">Log Out</button>
          ) : (
            <>
              <Link href="/login" className="block py-2 text-blue-600 hover:underline">Log In</Link>
              <Link href="/signup" className="block py-2 bg-blue-600 text-white rounded-full text-center">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
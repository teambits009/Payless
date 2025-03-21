import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Buy Now, Pay Later
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Shop now and pay over time with flexible plans.
          </p>
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image src="/hero-image.png" alt="BNPL Hero" width={500} height={400} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
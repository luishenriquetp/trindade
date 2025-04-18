import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 text-[#494949] font-sans font-semibold uppercase text-xs backdrop-blur-md shadow-md">
      <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto px-4 py-3">
        
        {/* Grupo esquerdo alinhado à direita */}
        <div className="absolute left-0 flex gap-8 justify-end w-1/3">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
        </div>

        {/* Logo centralizado */}
        <div className="flex justify-center w-1/3">
          <Link href="/">
            <Image
              src="/actual_logo.png"
              alt="Site logo"
              width={200}
              height={27}
              priority
            />
          </Link>
        </div>

        {/* Grupo direito alinhado à esquerda */}
        <div className="absolute right-0 flex gap-8 justify-start w-1/3">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}

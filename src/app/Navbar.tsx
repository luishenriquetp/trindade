import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 text-md left-0 w-full flex items-center justify-center bg-gray-900 p-4 z-10">
      <ul className="flex items-center justify-between w-full max-w-3xl px-2">
        <li><Link href="/home" className=" hover:underline">Home</Link></li>
        <li><Link href="/about" className=" hover:underline">About</Link></li>
        <li><Link href="/services" className=" hover:underline">Services</Link></li>
        <li><Link href="/" className=" hover:underline mx-auto">
        <Image
              className="dark:invert"
              src="/globe.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
        </Link></li>
        <li><Link href="/blog" className=" hover:underline">Blog</Link></li>
        <li><Link href="/contact" className=" hover:underline">Contact</Link></li>
        <li><Link href="/portfolio" className=" hover:underline">Portfolio</Link></li>
      </ul>
    </nav>
  );
}

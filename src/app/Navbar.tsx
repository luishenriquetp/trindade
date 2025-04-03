import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="uppercase fixed top-0 text-xs left-0 w-full flex items-center justify-center bg-gray-900 p-4 z-10">
      <div className="gap-6 flex items-center justify-between w-full max-w-3xl px-2">
        <Link href="/home" className=" hover:underline text-xs">Home</Link>
        <Link href="/about" className=" hover:underline text-xs ">About</Link>
        <Link href="/services" className=" hover:underline text-xs ">Services</Link>
        <Link href="/" className=" hover:underline text-xs ">
        <Image
              src="/actual_logo.png"
              alt="Vercel logomark"
              width={200}
              height={27}
            />
        </Link>
        <Link href="/blog" className=" hover:underline text-xs ">Blog</Link>
        <Link href="/contact" className=" hover:underline text-xs ">Contact</Link>
        <Link href="/portfolio" className=" hover:underline text-xs ">Portfolio</Link>
      </div>
    </nav>
  );
}

import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="relative w-full h-150 bg-cover bg-center">
      <div className="absolute inset-0 bg-[#ebebeb]" />
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center">
        <div className="flex justify-center items-center pb-4">
          <Image
            src="/icone.png"
            alt="Vercel logomark"
            width={50}
            height={34}
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-[#494949]">
          Welcome to Our Second
        </h1>
        <p className="text-xl mb-8">
          Explore amazing features and get started today!
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function SectionFour() {
  return (    
    <>
      <div className="text-center pt-20 bg-[#ebebeb]">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our First</h1>
        <p className="text-xl">
          Explore amazing features and get started today!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-20 p-20 bg-[#ebebeb]">
        <div className="text-center"><FourthBlock/></div>
        <div className="text-center"><FourthBlock/></div>
      </div>
    </>
  );
}

function FourthBlock() {
  return (
    
    <div className="bg-[#ebebeb]">
      <div className="flex justify-center items-center pb-8 ">
          <Image
            src="/icone.png"
            alt="Vercel logomark"
            width={50}
            height={34}
          />
        </div>
      <h5 className="text-2xl font-bold mb-4 text-[#494949]">
        Welcome to Our Third
      </h5>
      <p className="text-xl mb-8">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
      </p>

    </div>
  );
}

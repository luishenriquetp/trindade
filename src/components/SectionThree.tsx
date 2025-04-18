import Image from "next/image";

export default function SectionThree() {
  return (
    <>
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our First</h1>
        <p className="text-xl mb-8">
          Explore amazing features and get started today!
        </p>
      </div>
      <div className="grid grid-cols-6 gap-20 p-20">
        <div className="text-center col-start-1 col-end-3"><ThirdBlock/></div>
        <div className="text-center col-start-3 col-end-5"><ThirdBlock/></div>
        <div className="text-center col-start-5 col-end-7"><ThirdBlock/></div>
        <div className="text-center col-start-2 col-end-4"><ThirdBlock/></div>
        <div className="text-center col-start-4 col-end-6"><ThirdBlock/></div>
      </div>
    </>


  );
}

function ThirdBlock() {
  return (
    
    <div>
      <div className="flex justify-center items-center pb-8">
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

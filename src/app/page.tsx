import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('http://lorempixel.com.br/1920/1080)" // Lorem Pixel image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex justify-center items-center w-full h-full text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">Explore amazing features and get started today!</p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div
      className="relative w-full h-screen bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex justify-center items-center w-full h-full text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">Explore amazing features and get started today!</p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    </>
    
    
  );
}

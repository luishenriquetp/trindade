export default function SectionOne() {
    return (
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(home2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex justify-center items-center w-full h-full text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our First</h1>
            <p className="text-xl mb-8">
              Explore amazing features and get started today!
            </p>
            <a
              href="#"
              className="font-sans uppercase bg-[#f1345d] hover:bg-[#f1345d] text-white py-3 px-8 font-semibold text-xs transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  }
  
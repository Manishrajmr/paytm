export default function HeroSection() {
    return (
      <section className="bg-black text-white h-full md:h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Text Section */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Manage all your <span className="text-green-400">payments</span> in one place
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Simplify your digital transactions with PayMe – fast, secure and smart payment solutions for your business and daily life.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
              Get Started for Free
            </button>
          </div>
  
          {/* Right Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-2886.jpg?semt=ais_hybrid&w=740"
              alt="Payment UI Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
  
        </div>
      </section>
    );
  }
  
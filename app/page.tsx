import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">
          Weapons to Grow<br />Your Brand
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Turbocharge your business growth.
        </p>
        <p className="text-xl text-gray-600 mb-8">
          Our products help ignite sales and entrepreneurship.
        </p>
        
        <button className="px-8 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold mb-4">
          Start for free
        </button>
        
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span>No credit card required</span>
          <span className="text-yellow-400">★★★★★</span>
          <span>4.8/5 G2 Rating</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Verifier Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Email verifier</h3>
            <div className="relative h-48 w-48 mx-auto">
              {/* Add your circular progress chart here */}
            </div>
          </div>

          {/* Ecom Brands Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-blue-500 text-4xl font-bold mb-2">14.5M+</div>
            <div className="text-gray-600">ecom brands</div>
          </div>

          {/* Deliverability Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-blue-500 text-4xl font-bold mb-2">100%</div>
            <div className="text-gray-600">deliverability</div>
          </div>
        </div>
      </div>
    </main>
  );
}

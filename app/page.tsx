import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0A1F44] mb-6">
          Weapons to Grow<br />Your Agen
        </h1>
        <p className="text-xl text-[#4F5E64] mb-4">
          Turbocharge your business growth.
        </p>
        <p className="text-xl text-[#4F5E64] mb-8">
          Our products help ignite sales and entrepreneurship.
        </p>
        
        <button className="px-8 py-4 bg-[#0066FF] text-white rounded-xl text-lg font-semibold mb-4">
          Start for free
        </button>
        
        <div className="flex items-center justify-center gap-2 text-[#4F5E64]">
          <Image src="/credit-card.svg" alt="" width={20} height={20} />
          <span>No credit card required</span>
          <span className="text-yellow-400">★★★★★</span>
          <span>4.8/5 G2 Rating</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Verifier Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0A1F44]">Email verifier</h3>
            <div className="relative h-48 w-48 mx-auto">
              <div className="donut-chart">
                <div className="center">
                  <div className="text-2xl font-bold">5,689</div>
                  <div className="text-gray-500">Valid</div>
                </div>
              </div>
              <div className="legend mt-4 flex justify-center gap-4">
                <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#2DD4BF] mr-2"></span>Valid</span>
                <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#818CF8] mr-2"></span>Invalid</span>
                <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#FB7185] mr-2"></span>Catch-all</span>
              </div>
            </div>
          </div>

          {/* Ecom Brands Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="mb-4">
              <Image src="/shop-icon.svg" alt="" width={48} height={48} className="mx-auto" />
            </div>
            <div className="text-[#0066FF] text-4xl font-bold mb-2">14.5M+</div>
            <div className="text-[#4F5E64]">ecom brands</div>
          </div>

          {/* Deliverability Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="mb-4">
              <Image src="/shield-icon.svg" alt="" width={48} height={48} className="mx-auto" />
            </div>
            <div className="text-[#0066FF] text-4xl font-bold mb-2">100%</div>
            <div className="text-[#4F5E64]">deliverability</div>
          </div>
        </div>
      </div>
    </main>
  );
}

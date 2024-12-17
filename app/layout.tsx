import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrandNav - Weapons to Grow Your Brand",
  description: "Tools and solutions to grow your brand and business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="text-xl font-bold">BrandNav</div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-700">Products</a>
                <a href="#" className="text-gray-700">Pricing</a>
                <a href="#" className="text-gray-700">Blogs</a>
                <a href="#" className="text-gray-700">Resources</a>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-indigo-600">Log in</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Start for free
                </button>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

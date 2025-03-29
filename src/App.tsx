import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Phone, Mail, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#003087] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>1-800-645-7270</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>Contact Us</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Branch Locator</span>
              <span>Help Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold text-[#003087]">MSC</h1>
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search by keyword or part #"
                  className="w-[500px] py-2 px-4 border border-gray-300 rounded"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2">
                <User size={24} />
                <span className="hidden md:inline">Account</span>
              </button>
              <button className="flex items-center space-x-2">
                <ShoppingCart size={24} />
                <span className="hidden md:inline">Cart</span>
              </button>
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block py-4">
            <ul className="flex space-x-8">
              {['All Products', 'Brands', 'Services', 'Resources', 'Solutions'].map((item) => (
                <li key={item} className="group relative">
                  <button className="flex items-center space-x-1 hover:text-[#003087]">
                    <span>{item}</span>
                    <ChevronDown size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {['All Products', 'Brands', 'Services', 'Resources', 'Solutions'].map((item) => (
                <li key={item}>
                  <button className="flex items-center space-x-1">
                    <span>{item}</span>
                    <ChevronDown size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Industrial Supplies & Solutions</h2>
            <p className="text-xl mb-8">Your trusted partner for metalworking, safety, and MRO supplies</p>
            <button className="bg-[#003087] text-white px-8 py-3 rounded hover:bg-blue-900 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            'Cutting Tools',
            'Safety Products',
            'Power Tools',
            'Material Handling',
            'Measuring Tools',
            'Abrasives'
          ].map((category) => (
            <div key={category} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-center">{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 mb-4 rounded" />
                <h3 className="font-semibold mb-2">Industrial Tool {item}</h3>
                <p className="text-gray-600 mb-2">Part #: MSC{item}234</p>
                <p className="text-[#003087] font-bold">$299.99</p>
                <button className="mt-4 w-full bg-[#003087] text-white py-2 rounded hover:bg-blue-900 transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#003087] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>Order Status</li>
                <li>Returns</li>
                <li>Product Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Catalogs</li>
                <li>Technical Library</li>
                <li>Safety Data Sheets</li>
                <li>Calculators</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About MSC</h3>
              <ul className="space-y-2">
                <li>Company Info</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li>1-800-645-7270</li>
                <li>Branch Locations</li>
                <li>Email Updates</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-400 text-center">
            <p>&copy; {new Date().getFullYear()} MSC Industrial Supply Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
'use client';

import { useTheme } from './ThemeContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { VersionSwitcher } from '../components/VersionSwitcher';

// Standard Layout Component
const StandardLayout = () => {
  const renderStandardLayout = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] sm:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
        <div className="relative h-full max-w-[90rem] mx-auto px-16 sm:px-32 lg:px-48 flex items-center">
          <div className="space-y-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
              Welcome to <span className="text-teal-600">Le Jardin</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Discover our collection of premium plants, carefully selected to bring nature&apos;s beauty into your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-lg">
                Shop Now
              </button>
              <button className="px-10 py-5 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Plants Section */}
      <section className="py-24 px-16 sm:px-32 lg:px-48">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Plants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => console.log(`Selected ${product.name}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <>
      <VersionSwitcher />
      {renderStandardLayout()}
    </>
  );
};

// Tropical Layout Component
const TropicalLayout = () => {
  const renderTropicalLayout = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50">
      {/* Hero Section */}
      <div className="relative h-[600px] sm:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/80 to-transparent" />
        <div className="relative h-full max-w-[90rem] mx-auto px-12 sm:px-24 lg:px-32 flex items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif italic text-orange-900">
              Welcome to <span className="text-orange-600">Le Jardin</span>
            </h1>
            <p className="text-xl text-orange-800 font-serif italic max-w-lg mx-auto lg:mx-0">
              Discover our collection of premium plants, carefully selected to bring nature&apos;s beauty into your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all hover:scale-105 font-serif italic">
                Shop Now
              </button>
              <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 transition-all hover:scale-105 font-serif italic">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Plants Section */}
      <div className="py-24 px-12 sm:px-24 lg:px-32">
        <h2 className="text-4xl font-bold font-serif italic text-orange-900 text-center mb-12">Featured Plants</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <VersionSwitcher />
      {renderTropicalLayout()}
    </>
  );
};

// Boho Layout Component
const BohoLayout = () => {
  const renderBohoLayout = () => (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[600px] sm:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/80 to-transparent" />
        <div className="relative h-full max-w-[90rem] mx-auto px-12 sm:px-24 lg:px-32 flex items-center">
          <div className="max-w-[120rem] mx-auto w-full">
            <div className="flex flex-col items-center">
              <h1 className="text-[12rem] font-black text-[#2D2D2B] leading-none tracking-tight">
                le jardin
              </h1>
              <div className="mt-16 text-center">
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button className="px-16 py-8 bg-[#2D2D2B] text-white rounded-lg hover:bg-[#1D1D1B] transition-all hover:scale-105 font-serif text-2xl">
                    SHOP NOW
                  </button>
                  <button className="px-16 py-8 border-4 border-[#2D2D2B] text-[#2D2D2B] rounded-lg hover:bg-[#2D2D2B]/5 transition-all hover:scale-105 font-serif text-2xl">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Plants Section */}
      <div className="py-24 px-12 sm:px-24 lg:px-32 bg-white">
        <div className="max-w-[120rem] mx-auto">
          <h2 className="text-6xl font-black text-[#2D2D2B] text-center mb-32">
            FEATURED PLANTS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {products.slice(0, 4).map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <VersionSwitcher />
      {renderBohoLayout()}
    </>
  );
};

// Cyber Layout Component
const CyberLayout = () => {
  const renderCyberLayout = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section */}
      <div className="relative h-[600px] sm:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        <div className="relative h-full max-w-[90rem] mx-auto px-12 sm:px-24 lg:px-32 flex items-center">
          <div className="space-y-12">
            <h1 className="text-5xl sm:text-6xl font-bold font-mono text-blue-400">
              WELCOME TO <span className="text-blue-300">LE JARDIN</span>
            </h1>
            <p className="text-xl text-blue-200 font-mono max-w-lg">
              DISCOVER OUR COLLECTION OF PREMIUM PLANTS, CAREFULLY SELECTED TO BRING NATURE&apos;S BEAUTY INTO YOUR HOME.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-blue-500 text-white rounded-none hover:bg-blue-400 transition-all hover:scale-105 font-mono border-2 border-blue-400">
                {'>'} SHOP NOW
              </button>
              <button className="px-10 py-5 border-2 border-blue-400 text-blue-400 rounded-none hover:bg-blue-900/50 transition-all hover:scale-105 font-mono">
                {'>'} LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Plants Section */}
      <div className="py-24 px-12 sm:px-24 lg:px-32">
        <h2 className="text-4xl font-bold font-mono text-blue-400 text-center mb-24">{'>'} FEATURED PLANTS</h2>
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="transform hover:scale-105 transition-all duration-300 border border-blue-400/30 h-[500px]">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <VersionSwitcher />
      {renderCyberLayout()}
    </>
  );
};

// Mystical Layout Component
const MysticalLayout = () => {
  const renderMysticalLayout = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Hero Section */}
      <div className="relative h-[600px] sm:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent" />
        <div className="relative h-full max-w-[90rem] mx-auto px-12 sm:px-24 lg:px-32 flex items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif italic text-purple-300">
              Welcome to <span className="text-purple-400">Le Jardin</span>
            </h1>
            <p className="text-xl text-purple-200 font-serif italic max-w-lg">
              Discover our collection of premium plants, carefully selected to bring nature&apos;s magic into your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all hover:scale-105 font-serif italic shadow-lg shadow-purple-500/50">
                Cast Spell
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-full hover:bg-purple-900/50 transition-all hover:scale-105 font-serif italic shadow-lg shadow-purple-500/20">
                Learn Magic
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Plants Section */}
      <div className="py-24 px-12 sm:px-24 lg:px-32">
        <h2 className="text-4xl font-bold font-serif italic text-purple-300 text-center mb-12">Magical Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product, index) => (
            <div key={product.id} className={`transform hover:rotate-${index % 2 === 0 ? '1' : '-1'} transition-transform duration-300`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <VersionSwitcher />
      {renderMysticalLayout()}
    </>
  );
};

export default function Home() {
  const { version } = useTheme();

  return (
    <>
      <VersionSwitcher />
      {version === 'standard' && <StandardLayout />}
      {version === 'tropical' && <TropicalLayout />}
      {version === 'boho' && <BohoLayout />}
      {version === 'cyber' && <CyberLayout />}
      {version === 'mystical' && <MysticalLayout />}
    </>
  );
}

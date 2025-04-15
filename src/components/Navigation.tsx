'use client';

import { useTheme } from '../app/ThemeContext';
import Link from 'next/link';

export function Navigation() {
  const { version } = useTheme();

  const getThemeStyles = () => {
    switch (version) {
      case 'standard':
        return {
          container: "bg-white shadow-lg",
          navigation: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          logo: "text-2xl font-bold text-gray-900 tracking-tight",
          links: "text-gray-600 hover:text-gray-900 font-medium",
          mobileMenu: "bg-white",
          desktopMenu: "bg-white",
          navItems: [
            { name: 'Home', href: '/' },
            { name: 'Products', href: '/products' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' }
          ],
          cartIcon: "🛒",
          searchIcon: "🔍"
        };
      case 'tropical':
        return {
          container: "bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 shadow-xl",
          navigation: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          logo: "text-2xl font-bold text-orange-900 font-serif italic tracking-wider",
          links: "text-orange-800 hover:text-orange-600 font-serif italic",
          mobileMenu: "bg-orange-50",
          desktopMenu: "bg-orange-50",
          navItems: [
            { name: '🌺 Home', href: '/' },
            { name: '📸 Gallery', href: '/gallery' },
            { name: '✨ Inspiration', href: '/inspiration' },
            { name: '👥 Follow Us', href: '/social' }
          ],
          cartIcon: "🌺",
          searchIcon: "🔍"
        };
      case 'boho':
        return {
          container: "bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 shadow-lg",
          navigation: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          logo: "text-2xl font-bold text-amber-900 font-serif tracking-wider",
          links: "text-amber-800 hover:text-amber-600 font-serif",
          mobileMenu: "bg-amber-50",
          desktopMenu: "bg-amber-50",
          navItems: [
            { name: '🏠 Home', href: '/' },
            { name: '🎨 Collections', href: '/collections' },
            { name: '💫 Save for Later', href: '/saved' },
            { name: '✨ Inspiration', href: '/inspiration' }
          ],
          cartIcon: "🎨",
          searchIcon: "🔍"
        };
      case 'cyber':
        return {
          container: "bg-gradient-to-r from-blue-900/30 via-blue-900/20 to-blue-900/30 backdrop-blur-sm border-b border-blue-500/30",
          navigation: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          logo: "text-2xl font-bold font-mono tracking-wider text-blue-400",
          links: "text-blue-200 hover:text-blue-400 font-mono tracking-wider",
          mobileMenu: "bg-blue-900/20 backdrop-blur-sm",
          desktopMenu: "bg-blue-900/20 backdrop-blur-sm",
          navItems: [
            { name: '> HOME', href: '/' },
            { name: '> AR VIEW', href: '/ar' },
            { name: '> 3D MODELS', href: '/3d' },
            { name: '> MATRIX', href: '/matrix' }
          ],
          cartIcon: "> CART",
          searchIcon: "> SEARCH"
        };
      case 'mystical':
        return {
          container: "bg-gradient-to-r from-purple-900/30 via-purple-900/20 to-purple-900/30 backdrop-blur-sm shadow-2xl",
          navigation: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          logo: "text-2xl font-bold font-serif italic tracking-wider text-purple-300",
          links: "text-purple-200 hover:text-purple-400 font-serif italic",
          mobileMenu: "bg-purple-900/20 backdrop-blur-sm",
          desktopMenu: "bg-purple-900/20 backdrop-blur-sm",
          navItems: [
            { name: '✨ Home', href: '/' },
            { name: '🔮 Spells', href: '/spells' },
            { name: '🧪 Cauldron', href: '/cauldron' },
            { name: '🛍️ Magic Shop', href: '/shop' }
          ],
          cartIcon: "✨",
          searchIcon: "🔮"
        };
      default:
        return {
          container: "bg-white shadow-lg",
          navigation: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          logo: "text-2xl font-bold text-gray-900 tracking-tight",
          links: "text-gray-600 hover:text-gray-900 font-medium",
          mobileMenu: "bg-white",
          desktopMenu: "bg-white",
          navItems: [
            { name: 'Home', href: '/' },
            { name: 'Products', href: '/products' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' }
          ],
          cartIcon: "🛒",
          searchIcon: "🔍"
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <nav className={styles.container}>
      <div className={styles.navigation}>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={styles.logo}>
              Le Jardin
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {styles.navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.links} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:scale-105`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <button className={`${styles.links} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:scale-105`}>
                {styles.searchIcon}
              </button>
              <button className={`${styles.links} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:scale-105`}>
                {styles.cartIcon}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {styles.navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.links} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:scale-105`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 px-3 py-2">
            <button className={`${styles.links} text-base font-medium transition-colors duration-200 hover:scale-105`}>
              {styles.searchIcon}
            </button>
            <button className={`${styles.links} text-base font-medium transition-colors duration-200 hover:scale-105`}>
              {styles.cartIcon}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
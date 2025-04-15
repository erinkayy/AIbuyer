'use client';

import { useState } from 'react';
import { Product } from '../data/products';
import { useTheme } from '../app/ThemeContext';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { version } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const getThemeStyles = () => {
    switch (version) {
      case 'standard':
        return {
          container: 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300',
          image: 'object-cover w-full aspect-square',
          content: 'p-4 flex flex-col',
          title: 'text-base font-semibold text-gray-900',
          price: 'text-teal-600 font-bold mt-0.5',
          description: 'text-sm text-gray-600 mt-1 line-clamp-2',
          tags: 'flex flex-wrap gap-1.5 mt-auto pt-2',
          tag: 'text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full',
          badge: 'absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full'
        };
      case 'tropical':
        return {
          container: "bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group aspect-square",
          image: "w-full h-[50%] object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110",
          content: "p-6 h-[50%] flex flex-col justify-between",
          title: "text-xl font-serif italic text-orange-900 group-hover:text-orange-600 transition-colors duration-300",
          price: "text-orange-600 font-bold text-lg",
          description: "text-orange-800 text-sm mt-2 font-serif italic line-clamp-2",
          tags: "flex flex-wrap gap-2 mt-4",
          tag: "bg-orange-200 text-orange-800 text-xs px-3 py-1 rounded-full hover:bg-orange-300 transition-colors duration-300",
          badge: "absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-serif italic"
        };
      case 'boho':
        return {
          container: "bg-amber-50 rounded-lg overflow-hidden transition-all duration-300 hover:rotate-1 hover:shadow-lg group aspect-square",
          image: "w-full h-[50%] object-cover transition-transform duration-300 group-hover:scale-105",
          content: "p-5 h-[50%] flex flex-col justify-between",
          title: "text-xl font-serif text-amber-900 group-hover:text-amber-600 transition-colors duration-300",
          price: "text-amber-600 font-bold text-lg",
          description: "text-amber-800 text-sm mt-2 font-serif line-clamp-2",
          tags: "flex flex-wrap gap-2 mt-3",
          tag: "bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded hover:bg-amber-300 transition-colors duration-300",
          badge: "absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded shadow-md font-serif"
        };
      case 'cyber':
        return {
          container: 'bg-blue-900/80 shadow-lg overflow-hidden transition-all duration-300 backdrop-blur-sm border-b-2 border-blue-400 hover:shadow-blue-400/20 h-[500px]',
          image: 'object-cover w-full aspect-square',
          content: 'p-4 flex flex-col h-[calc(100%-100%)]',
          title: 'text-base font-mono font-bold text-blue-300',
          price: 'text-blue-400 font-mono mt-1 font-bold',
          description: 'text-blue-200 font-mono text-sm mt-2 line-clamp-2',
          tags: 'flex flex-wrap gap-2 mt-auto pt-3',
          tag: 'bg-blue-800 text-blue-300 text-xs px-2 py-1 font-mono',
          badge: 'absolute top-2 left-2 bg-blue-500 text-black text-xs px-2 py-1 font-mono'
        };
      case 'mystical':
        return {
          container: "bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-lg group aspect-square",
          image: "w-full h-[50%] object-cover transition-transform duration-300 group-hover:scale-105",
          content: "p-5 h-[50%] flex flex-col justify-between",
          title: "text-xl font-serif italic text-purple-300 group-hover:text-purple-200 transition-colors duration-300",
          price: "text-purple-400 font-bold text-lg",
          description: "text-purple-200 text-sm mt-2 font-serif italic line-clamp-2",
          tags: "flex flex-wrap gap-2 mt-3",
          tag: "bg-purple-800 text-purple-300 text-xs px-3 py-1 rounded-full hover:bg-purple-700 transition-colors duration-300",
          badge: "absolute top-2 left-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-serif italic"
        };
      default:
        return {
          container: "bg-white shadow-md rounded-lg overflow-hidden",
          image: "w-full h-48 object-cover",
          content: "p-4",
          title: "text-lg font-semibold text-gray-900",
          price: "text-teal-600 font-bold",
          description: "text-gray-600 text-sm mt-2",
          tags: "flex flex-wrap gap-2 mt-3",
          tag: "bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={styles.image}
        />
        {version === 'cyber' && (
          <div className="absolute top-2 right-2 bg-blue-900/80 text-blue-300 text-xs px-2 py-1 font-mono hover:bg-blue-800/80 transition-colors duration-300">
            {'>'} AR VIEW
          </div>
        )}
        {version === 'mystical' && (
          <div className="absolute top-2 right-2 bg-purple-800/80 text-purple-300 text-xs px-3 py-1 rounded-full font-serif italic hover:bg-purple-700/80 transition-colors duration-300">
            ✨ Magical
          </div>
        )}
        <div className={styles.badge}>
          {version === 'standard' && 'New'}
          {version === 'tropical' && 'Hot'}
          {version === 'boho' && 'Handmade'}
          {version === 'cyber' && '> NEW'}
          {version === 'mystical' && 'Enchanted'}
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.tags}>
          {product.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {version === 'tropical' && '#'}
              {version === 'cyber' && '> '}
              {version === 'mystical' && '✨ '}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}; 
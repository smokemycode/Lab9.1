// src/components/ProductDisplay/ProductDisplay.tsx
import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-xl text-green-700 font-semibold">
        ${product.price.toFixed(2)}
      </p>

      {showDescription && (
        <p className="text-sm text-gray-600 mt-2">
          {product.description}
        </p>
      )}

      {showStockStatus && (
        <p
          className={`mt-2 font-semibold ${
            product.inStock ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      )}

      {children && <div className="mt-3">{children}</div>}
    </div>
  );
};
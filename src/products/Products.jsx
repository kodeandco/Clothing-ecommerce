import React from 'react';
import productData from '../data/productData'; // Assuming it's an array
import ProductCard from '../components/ProductCard';

function Products() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Products;

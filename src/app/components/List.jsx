import React from 'react';
import ListItems from './ListItems';

export default function List({ products, removeProduct }) {
  return (
    <div className='container'>
      <div className='título'><h2>My Cart</h2></div>
      {/* Display the list of products */}
      <div className='Preset'>
	  <ul>
  {products && products.length > 0 ? (
    products.map((product) => (
      <ListItems key={product.productId} product={product} removeProduct={removeProduct} />
    ))
  ) : (
    <li>No products available</li>
  )}
</ul>
      </div>
    </div>
  );
}




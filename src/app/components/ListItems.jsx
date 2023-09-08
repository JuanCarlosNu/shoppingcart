import React from 'react';

export default function ListItems({ product, removeProduct }) {
  const totalPrice = product.productPrice * product.productQuantity;

  return (
    <li>
      <table border="3">
        <tbody>
          <tr>
            <td width="100px" id="one">
              <span className='image'>
                <img src={product.product_imageURl} alt={product.productName} />
              </span>
            </td>
            <td width="100px" id="two">
              <span>{product.productName}</span>
            </td>
            <td width="100px" id='Three'>
              <span>{product.productPrice}</span>
            </td>
            <td width="100px">
              <span>{product.productQuantity}</span>
            </td>
            <td width="100px">
              <span>{totalPrice}</span>
            </td>
            <td width="100px">
              <button className="delete" onClick={() => removeProduct(product.productId)}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}
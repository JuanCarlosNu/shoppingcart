import React, { useState } from 'react';

export default function AddItems({ addProduct }) {
  const [newProductName, setNewProductName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');

  const addItems = () => {
    if (newProductName && newPrice && newQuantity) {
      addProduct({
        productId: Date.now(), // Generate a unique ID (you can use a better method)
        productName: newProductName,
        productPrice: parseFloat(newPrice),
        productQuantity: parseInt(newQuantity),
      });
      // Reset input fields
      setNewProductName('');
      setNewPrice('');
      setNewQuantity('');
    }
  };

  return (
    <center>
      <div className="add-todo">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Add Product Name"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Add Price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Add Quantity"
                  value={newQuantity}
                  onChange={(e) => setNewQuantity(e.target.value)}
                />
              </td>
              <td>
                <button className="add-button" onClick={addItems}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  );
}
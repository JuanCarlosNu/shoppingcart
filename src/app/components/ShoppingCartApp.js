import React, { Component } from 'react';
import List from './List';
import AddItems from './AddItems';

class ShoppingCartApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Initialize with an empty array
    };
  }

  // Add a product to the cart
  addProduct = (newProduct) => {
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));
  };

  // Remove a product from the cart
  removeProduct = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((product) => product.productId !== productId),
    }));
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1 className="App-header">Available Products</h1>
       { /* List component */}
        <List products={products} removeProduct={this.removeProduct} />
        {/* AddItems component */}
        <AddItems addProduct={this.addProduct} />
      </div>
    );
  }
}

export default ShoppingCartApp;

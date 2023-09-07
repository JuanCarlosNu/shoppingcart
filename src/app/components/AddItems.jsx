import React from 'react';
import ItemJSON from '../Items/ItemJSON';

export default class AddItems extends React.Component {
	
	//will pick the added product and added

	addItems() {
		const newProduct_URL  = this.refs.product_imageURl.value;
		const newProductName = this.refs.product.value;
		const newPrice = this.refs.price.value;
		const newQuantity = this.refs.quantity.value;

		if (newProductName) {
			ItemJSON.addNewProducts({
				product_imageURl: newProduct_URL,
				productName: newProductName,
				productPrice: newPrice,
				productQuantity: newQuantity,
			});
			ItemJSON.emitChange();
			this.refs.product_imageURl.value = '';
			this.refs.product.value = '';
			this.refs.price.value = '';
			this.refs.quantity.value = '';
		}
	}

	render() {
		return (
			<center>
				<div className="add-todo">
					<table >
						<thead>	
							<tr>
							   <th>Image url</th>
								<th>Product Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td><input type="text"
									placeholder="Product URL"
									ref="product_imageURl" /></td>
								<td><input type="text"
									placeholder="Add Product Name"
									ref="product" /></td>
								<td><input type="text"
									placeholder="Add Price"
									ref="price" /></td>
								<td><input type="text"
									placeholder="Add Quantity"
									ref="quantity" /></td>
								<td><button className="add-button"
									onClick={this.addItems.bind(this)}>
									Add
								</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</center>
		);
	}
}

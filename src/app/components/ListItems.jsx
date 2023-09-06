import React from 'react';
import ItemJSON from '../Items/ItemJSON';
export default class ListItems extends React.Component {
	//request pull
	// This code is meant for deletion
	deleteProduct(e) {
		e.preventDefault();
		ItemJSON.deleteProducts(this.props.product.productId);
		ItemJSON.emitChange();
	}

	render() {
		const product = this.props.product;

		return (
			// displaying available products and it
			// is having delete action
			<li>
			<div className="line">
					<div className="line_content">
						
							<td width="100px" id="one">
                                <span className='image'>
                               <img src={product.product_imageURl} ></img>
                                </span>
                                </td>
                            <td width="100px" id="two">
								<span  >
                                {product.productName} </span>
							</td>
							<td width="100px" id='Three'>
                                <span>
								{product.productPrice}</span>
							</td>
							<td width="100px">
                                <span>
								{product.productQuantity}</span>
							</td>
							<td width="100px"><button
								className="delete"
								onClick={this.deleteProduct.bind(this)}>
								Delete </button>
							</td>
							</div>
						</div>					
			</li>
		);
	}
}

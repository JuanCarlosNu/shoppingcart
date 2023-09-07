import React from 'react';
import ItemJSON from '../Items/ItemJSON';
import cruz from './images/cruz.png';
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
		
		const totalPrice = product.productPrice * product.productQuantity;

		return (
			// displaying available products and it
			// is having delete action
			<li className='List'>
			<div className="line">
					<div className="line_content">	
						
							<div className='image'>
                                <span id='photo'>
                               <img src={product.product_imageURl} ></img>
                                </span>
                                </div>
								<div className='data_container'>
                            <div className='data'>
								<span id="name" >
                                {product.productName} 
								</span>
								<span id='price'>
									<span>$</span><span> </span>
								{product.productPrice}
								</span>
                                <span id='quantity'>
								{product.productQuantity}</span>
								<span>{totalPrice}</span>
							</div>
							</div>
							<div className='buton'>
								<button
								className="delete"
								onClick={this.deleteProduct.bind(this)}>
								<img id="cruz" src={cruz} alt='image'/> </button>
								</div>
							</div>
						</div>					
			</li>
		);
	}
}

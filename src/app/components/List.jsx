import React from 'react';
import ItemJSON from '../Items/ItemJSON';
import ListItems from './ListItems';

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = ItemJSON.getAll();
	}

	componentDidMount() {
		ItemJSON.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		ItemJSON.removeChangeListener(this._onChange.bind(this));
	}

	_onChange() {
		this.setState(ItemJSON.getAll());
	}

	render() {
		const ListItemsList = this.state.products.map(
			product => {
				return (
					<ListItems key={product.productId}
						product={product} />
				);
			});
		return (
			<div className='container'>
				<div className='título'><h2>Mi Carrito</h2></div>
				{/* All the items present in ItemJSON.js are displayed here*/}
                <div className='Preset'>
				<ul>{ListItemsList}</ul>
                </div>
				</div>
			
		);
	}
}

import { EventEmitter } from 'events';
import assign from 'object-assign';

// Initially specifying the constant items just as an sample
const ProductStore = assign({}, EventEmitter.prototype, {
	items: {
		products: [
			{
				productId: 0, productName: 'Samsung',
				productPrice: 10000,
                 productQuantity: 2, 
                 product_imageURl: 'https://i.pcmag.com/imagery/reviews/03POP0TjDjuXonJXI16Omn2-1..v1663720055.jpg',
			},
			{
				productId: 1, productName: 'Motorola',
				productPrice: 7000, productQuantity: 3,
                product_imageURl: './components/images/phone.jpg',
			},
			{
				productId: 2, productName: 'Redmi',
				productPrice: 8000, productQuantity: 4,
                product_imageURl: './components/images/phone.jpg',
			},
		]
	},

	nextproductId: 3,

	// To get all the items and display in the screen
	getAll: function getAll() {
		return this.items;
	},

	emitChange: function emitChange() {
		this.emit('change');
	},

	// When an item is added
	addChangeListener: function addChangeListener(callback) {
		this.on('change', callback);
	},

	// When an item is removed
	removeChangeListener: function removeChangeListener(callback) {
		this.removeListener('change', callback);
	},

	addNewProducts: function addNewProducts(product) {
		const products = this.items.products;
		if (!products ||
			typeof this.items.products.length !== 'number') {
			this.items.products = [];
		}
		product.productId = this.nextproductId++;
		product.done = false;
		this.items.products.push(product);
	},

	deleteProducts: function deleteProducts(productId) {
		this.items.products = this.items.products.filter(
			(product) => product.productId !== productId);
	}
});

export default ProductStore;

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
                 product_imageURl: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a135mzkkaro/gallery/ar-galaxy-a13-sm-a135-sm-a135mzkkaro-532207027?$650_519_PNG',
			},
			{
				productId: 1, productName: 'Motorola',
				productPrice: 7000, productQuantity: 3,
                product_imageURl: 'https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Motorola-Edge-40-Pro-1.jpg?tr=q-100',
			},
			{
				productId: 2, productName: 'Redmi',
				productPrice: 8000, productQuantity: 4,
                product_imageURl: 'https://http2.mlstatic.com/D_Q_NP_743404-MLA48592292176_122021-O.webp',
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

const Product = require('../models/product')
const { patch } = require('../routes/admin')

exports.getProducts = (req, res) => {
	Product.fetchAll((products) => {
		res.render('shop/product-list', {
			products: products,
			pageTitle: 'All Products',
			path: '/products',
		})
	})
}

exports.getIndex = (req, res) => {
	Product.fetchAll((products) => {
		res.render('shop/index', {
			products: products,
			pageTitle: 'Shop',
			path: '/',
		})
	})
}

exports.getCart = (req, res) => {
	res.render('shop/cart', {
		path: '/cart',
		pageTitle: 'Your Cart',
	})
}

exports.getOrders = (req, res) => {
	res.render('shop/orders', {
		path: '/orders',
		pageTitle: 'Your Orders',
	})
}

exports.getCheckout = (req, res) => {
	res.render('shop/checkout', {
		path: '/checkout',
		pageTitle: 'Checkout',
	})
}

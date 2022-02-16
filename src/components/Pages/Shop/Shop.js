import React from 'react';
import laptop from '../../../images/Product-images/laptop/laptop.jpg';
import Cart from '../Cart/Cart';

const productData = [
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
	{
		name: 'Lenovo Ideapad Slim 3i (82H801CBIN) 11th Gen Intel Core i5 MX350 2GB 15.6″ FHD IPS Laptop',
		price: '৳ 73,200',
		img: laptop,
	},
];
const Shop = () => {
	return (
		<div className='container'>
			{productData.map((productData) => (
				<Cart productData={productData}></Cart>
			))}
		</div>
	);
};

export default Shop;

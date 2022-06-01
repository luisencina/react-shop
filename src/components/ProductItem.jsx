import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '@context/AppContext'
import bt_add_to_cart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {

	const image_not_found = "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"

	const {addToCart} = useContext(AppContext)
	const handleClick = item => {
		addToCart(item)
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0] || image_not_found} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={bt_add_to_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;

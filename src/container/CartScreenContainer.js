import React from 'react';
import {product_data} from '../stub';
import HeaderBar from '../Components/HeaderBarComponent';
import CartTable from '../Components/CartTableComponent';

class CartScreen extends  React.Component{
	render(){
		return(
			<div className="cartscreen_div">
				<HeaderBar />
				<CartTable productEach={product_data} />
			</div>
			);
	}
}

export default CartScreen;
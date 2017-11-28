import React from 'react';
import {product_data} from '../stub';
import HeaderBar from '../Components/HeaderBarComponent';
import CartTable from '../Components/CartTableComponent';

class CartScreen extends  React.Component{
	render(){
		const prod_list = product_data;
		return(
			<div className="cartscreen_div">
				<HeaderBar />
				<CartTable productEach={prod_list} />
			</div>
			);
	}
}

export default CartScreen;
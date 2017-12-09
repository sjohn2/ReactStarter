import React from 'react';
import BuyingItems from '../Components/BuyingComponent';
import HeaderBar from '../Components/HeaderBarComponent';

class BuyingScreen extends  React.Component{
	render(){
	/*	debugger;*/
		var products = this.props.products_delivery
		return(
			<div className="Buying_div">
				<HeaderBar />
				<BuyingItems />
			</div>
			);
	}
}

export default BuyingScreen;

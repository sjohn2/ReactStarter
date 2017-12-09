import React from 'react';
import HeaderBar from '../Components/HeaderBarComponent';
import CartTable from '../Components/CartTableComponent';
import {connect} from 'react-redux';


class CartScreen extends  React.Component{
	render(){
		/*debugger;*/
		const products_sent = this.props.products
		return(
			<div className="cartscreen_div">
				<HeaderBar />
				<CartTable  products_receive={products_sent}/>
			</div>
			);
	}
}
CartScreen.defaultProps = {
	products : [],
}
const mapStateToProps =(state) =>{

	return {products : state.productReducer};
		
}
export default connect(mapStateToProps,null)(CartScreen);
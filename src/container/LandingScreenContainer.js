import React from 'react';
import HeaderBar from '../Components/HeaderBarComponent';
import ProductList from '../Components/ProductListComponent';
import {populateProducts} from '../Actions/cartAction';
import {connect} from 'react-redux';

class LandingScreen extends React.Component{
	render(){
/*		debugger;*/
		var total_products = this.props.quantity
		const products_sent = this.props.products
		return(
			<div>
				<HeaderBar />
				<ProductList products_sending = {products_sent}/>
			</div>
			);
	}
}

LandingScreen.defaultProps = {
	products : [],
}
const mapStateToProps =(state) =>{

	return {products : state.productReducer};
		
}
export default connect(mapStateToProps,null)(LandingScreen);
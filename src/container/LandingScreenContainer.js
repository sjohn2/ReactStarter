import React from 'react';
import HeaderBar from '../Components/HeaderBarComponent';
import  {product_data}   from '../stub';
import ProductList from '../Components/ProductListComponent';
import {populateProducts} from '../Actions/cartAction';
import {connect} from 'react-redux';

class LandingScreen extends React.Component{

	componentWillMount(){
		// const products = product_data
		this.props.populateProducts(product_data);
	}

	render(){
		debugger;
		// const product_list = product_data
		return(
			<div>
				<HeaderBar />
				<ProductList eachProd={product_data}/>
			</div>
			);
	}
}

LandingScreen.defaultProps = {
	product : [],
}

const mapStateToProps = (state) =>({
	product : state.productReducer
});

const mapDispatchToProps = (dipatch) =>({
	populateProducts : (product) => dipatch(populateProducts(product))
});

export default connect(mapStateToProps,mapDispatchToProps)(LandingScreen);
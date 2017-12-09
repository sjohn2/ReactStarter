import React from 'react';
import {connect} from 'react-redux';
import ProductDetails from '../Components/ProductComponent';

class ProductList extends React.Component{
	render(){
		const productArray = this.props.products_sending
		const product_list = []
		productArray.forEach(function(product){
				product_list.push(<ProductDetails prod={product} key={product.id} />);
		});
		return(
			<div>
			<h2 className="productName">PRODUCTS</h2>
				<div className="product-list-container">
					{product_list}
				</div>
			</div>
			);
	}
}

/*ProductList.defaultProps = {
	products : [],
}

const mapStateToProps = (state) =>({
	products : state.productReducer
});*/

export default /*connect(mapStateToProps)(*/ProductList/*)*/;
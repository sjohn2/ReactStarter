import React from 'react';
import {connect} from 'react-redux';
import ProductDetails from '../Components/ProductComponent';
import RelatedProductDetail from './RelatedProductDetail';

class RelatedProducts extends React.Component{
	render(){
		const related_prod = this.props.eachProd
		const product_list = []
		related_prod.forEach(function(product){
				product_list.push(<RelatedProductDetail prod={product} key={product.id} />);
		});
		return(
			<div>
				<div className="product-list-container">
					{product_list}
				</div>
			</div>
			);
	}
}

export default RelatedProducts;
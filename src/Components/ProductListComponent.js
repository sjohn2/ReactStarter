import React from 'react';

import ProductDetails from '../Components/ProductComponent';

class ProductList extends React.Component{
	render(){
		const product_list =[];
		debugger;
		this.props.eachProd.forEach(function(product){
				product_list.push(<ProductDetails prod={product} key={product.id} />);
		});
		return(
			<div>
			<h2>Products :</h2>
				<div className="product-list-container">
					{product_list}
				</div>
			</div>
			);
	}
}
export default ProductList;
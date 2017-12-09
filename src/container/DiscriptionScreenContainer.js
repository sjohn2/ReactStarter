import React from 'react';

import HeaderBar from '../Components/HeaderBarComponent';
import ProductDiscription from '../Components/ProductDiscriptionComponent';
import ProductList from '../Components/ProductListComponent';
import {find} from 'lodash';
import {connect} from 'react-redux';
import RelatedProducts from '../Components/RelatedProductList';

class DiscriptionScreen extends React.Component{

	render(){
/*		debugger;*/
		const pro_dta = this.props.products
		const product= find(pro_dta,{id: parseInt(this.props.match.params.id)});
		return(
			<div>
				<HeaderBar/>
				<ProductDiscription product_sent_Description={product} product_sent_key={product.id}/>
				<div class="related_product_class">
					<h4><strong>Related Products :</strong></h4>
					<RelatedProducts eachProd ={product.related_product}/>	
				</div>	
			</div>
			);
	}
}

const mapStateToProps =(state) =>{

	return {products : state.productReducer};
		
}

export default connect(mapStateToProps)(DiscriptionScreen);
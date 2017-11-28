import React from 'react';

import HeaderBar from '../Components/HeaderBarComponent';
import ProductDiscription from '../Components/ProductDiscriptionComponent';
import ProductList from '../Components/ProductListComponent';
import { product_data } from '../stub';
import {find} from 'lodash';



class DiscriptionScreen extends React.Component{

	render(){
		const pro_dta = product_data;
		const product= find(pro_dta,{id: parseInt(this.props.match.params.id)});
		return(
			<div>
				<HeaderBar/>
				<ProductDiscription product_sent_Description={product} product_sent_key={product.id}/>
				<div class="related_product_class">
					<h4><strong>Related </strong></h4>
					<ProductList eachProd ={product.related_products}/>	
				</div>	
			</div>
			);
	}
}

export default DiscriptionScreen;
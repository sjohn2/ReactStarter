import React from 'react';
import HeaderBar from '../Components/HeaderBarComponent';
import { product_data }  from '../stub';
import ProductList from '../Components/ProductListComponent';

class LandingScreen extends React.Component{

	render(){
		const prod_ori_list = product_data;
		return(
			<div>
				<HeaderBar />
				<ProductList eachProd={prod_ori_list}/>
			</div>
			);
	}
}

export default LandingScreen;
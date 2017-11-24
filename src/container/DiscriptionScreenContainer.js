import React from 'react';

import HeaderBar from '../Components/HeaderBarComponent';
import ProductDiscription from '../Components/ProductDiscriptionComponent';

class DiscriptionScreen extends React.Component{
	render(){
		return(
			<div>
				<HeaderBar/>
				<ProductDiscription/>
			</div>
			);
	}
}

export default DiscriptionScreen;
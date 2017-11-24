import React from 'react';

class ProductDetails extends React.Component{
	render(){
		const product = this.props.prod;
		return(
			<div className="producbox-container">
				<br/>
				<div>
					<h4><i>{product.name}</i></h4>
					<br/>
					<img src={product.url} height="200" width="150" />
					<br/>
						<div className="productbox-details">
							<h2>Price : {product.price} $</h2>
							<h4>Quantity</h4>
							<button className="minus_button">	
								<i className="fa fa-minus-square"></i>
							</button>
							<button className="plus_button">
								<i className="fa fa-plus-square"></i>
							</button>
							
						</div>
				</div>
			</div>		
			);
	}
}

export default ProductDetails;
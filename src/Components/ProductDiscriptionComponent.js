import React from 'react' ;
 
class ProductDiscription extends React.Component{
	render(){
		const product = this.props.product_sent_Description;
		return(
			<div className="product_desc_page">
				<h2><strong>Product Name :</strong> {product.name} </h2>
					<img src={product.url} height="300" width="200" />
					<div className="product_img_div">
						<h4><strong>Price : </strong>{product.price}</h4><br/>
						<h4><strong>Description : </strong>{product.description} </h4>
					</div>						
			</div>

			);
	}
}

export default ProductDiscription;
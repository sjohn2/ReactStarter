import React from 'react';
import {Link} from 'react-router-dom';
import {addToCart,removeFromCart} from '../Actions/cartAction';
import {connect} from 'react-redux';

class RelatedProductDetail extends React.Component{	
	render(){
		const product = this.props.prod;
		return(
			<div className="producbox-container">
				<div>
					<h5><i>{product.name}</i></h5>
					<Link to={`/details/${product.id}`}>
						<img src={product.url} height="100" width="100" />
					</Link>
					<br/>
						<div className="rel_productbox-details">
							<h4>Price : {product.price} $</h4>
							<h5>Qty</h5>
							<div className="rel_productbox-details_+,-">
							<i className="fa fa-plus-square" onClick = {()=>{this.props.addToCart(product)}} ></i>
							<i className="fa fa-minus-square" onClick= {()=>{this.props.removeFromCart(product)}} ></i>
							</div>
						</div>
				</div>
			</div>		
		);
	}
}

const mapDispatchToProps = (dispatch) =>({
	addToCart : (product) => dispatch(addToCart(product)),
	removeFromCart : (product) => dispatch(removeFromCart(product)),
});

export default connect(null,mapDispatchToProps)(RelatedProductDetail);
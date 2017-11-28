import React from 'react';
import {Link} from 'react-router-dom';
import {addToCart,removeFromCart} from '../Actions/cartAction';
import {connect} from 'react-redux';

class ProductDetails extends React.Component{

	
	render(){
	debugger;
		const product = this.props.prod;
		debugger;
		return(
			<div className="producbox-container">
				<br/>
				<div>
					<h4><i>{product.name}</i></h4>
					<br/>
					<Link to={`/details/${product.id}`}>
						<img src={product.url} height="200" width="150" />
					</Link>
					<br/>
						<div className="productbox-details">
							<h2>Price : {product.price} $</h2>
							<h4>Quantity</h4>
							<button className="minus_button" onClick= {()=>{this.props.removeFromCart(product)}}>	
								<i className="fa fa-minus-square"  ></i>
							</button>
							<button className="plus_button" onClick = {()=>{this.props.addToCart(product)}}>
								<i className="fa fa-plus-square"  ></i>
							</button>
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

export default connect(null,mapDispatchToProps)(ProductDetails);
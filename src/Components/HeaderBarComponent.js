import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class HeaderBar extends React.Component{
	render(){
		const num = this.props.quantity;
		return(
			<div>
				<h1> Flip-Cart </h1>
				<Link to={`/cart`}>
					<i className="fa fa-shopping-cart" onClick={()=>{this.props.createTable(num)}}><span><h2>{num}</h2></span></i>
				</Link>
			</div>
			);
	}
}

const mapStateToProps =(state) =>{
	var quantity=0;
	if(state.cartReducer.items != undefined ){
		for (var i = 0; i < state.cartReducer.items.length; i++) {
				quantity += state.cartReducer.items[i].quantity
		}
		return {quantity: quantity};
	}
	else{
		return {quantity : 0};
	}

}


export default connect(mapStateToProps,null)(HeaderBar);
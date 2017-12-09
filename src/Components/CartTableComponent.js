import React from 'react';
import {Link} from 'react-router-dom';
import CartListGen from './CartListGeneratorComponent';
import {connect} from 'react-redux';
/*import {BuyItems} from './BuyingComponent';*/


class CartTable extends React.Component{
	render(){
		debugger;
		const products = this.props.products;
		const cartReducer_item  = this.props.cartQty;
		const prod_list = []
		var total = 0
		var display = []
		if(cartReducer_item.length > 0 )
		{
			debugger;
			for (var i = 0; i < cartReducer_item.length; i++) {
				for (var j = 0; j < products.length; j++) {
					if(cartReducer_item[i].productId == products[j].id){
						debugger;
						prod_list[i] = products[j];
						prod_list[i].quantity = cartReducer_item[i].quantity;
						total += products[j].price * cartReducer_item[i].quantity;
						break;
					}
				}
			}
			
			prod_list.forEach(function(product){
				if(product.quantity!=0){
					display.push(<CartListGen prod_table={product}/>);
				}	
			});

			return(
				<div className="cart_table_div">
					<table>
						<thead>
							<tr>
								<th>Product</th>
								<th>Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>SubTotal</th>
							</tr>
						</thead>
						<tbody>
							{display}
							<td><strong>TOTAL</strong></td>
							<td><strong>$ {total}</strong></td>
						</tbody>
					</table>
					<Link to={`/buy`}>
					<div className="Buy">
						<button>Buy</button>
					</div>
					</Link>
				</div>
				);
		}
		else
		{
			debugger;
			return(
				<div className="empty_cart">
					<h1> YOUR CART IS EMPTY ...</h1>
					<h4>Click on Flip cart Logo to go back </h4>
				</div>
				);
		}
	}
}
const mapStateToProps = (state) => {
	if(state.cartReducer.items != undefined){
		return {
			cartQty : state.cartReducer.items,
			products : state.productReducer,
		};
	}
	else{
		return{
			cartQty : [],
			products : state.productReducer,
		};
	}
}

export default connect(mapStateToProps,null)(CartTable);
import React from 'react';

import CartListGen from './CartListGeneratorComponent';
import {connect} from 'react-redux';


class CartTable extends React.Component{
	render(){
		const products = this.props.products;
		const actionData  = this.props.actionData;
		const prod_list = []
		var total = 0
		for (var i = 0; i < actionData.length; i++) {
			for (var j = 0; j < products.length; j++) {
				if(actionData[i].productId == products[j].id){
					prod_list[i] = products[j];
					prod_list[i].quantity = actionData[i].quantity;
					total += products[j].price * actionData[i].quantity;
					break;
				}
			}
		}
		const display = []
		prod_list.forEach(function(product){
			display.push(<CartListGen prod_table={product}/>);
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
						<td>TOTAL</td>
						<td>{total}</td>
					</tbody>
				</table>
			</div>
			);
	}
}
const mapStateToProps = (state) => {
	if(state.cartReducer.items != undefined){
		return {
			actionData : state.cartReducer.items,
			products : state.productReducer,
		};
	}
	else{
		return{
			actionData : [],
			products : state.productReducer,
		};
	}
}

export default connect(mapStateToProps,null)(CartTable);
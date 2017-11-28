import React from 'react';

import CartListGen from './CartListGeneratorComponent';

class CartTable extends React.Component{
	render(){
		const prod_list =[];
		this.props.productEach.forEach(function(product){
				prod_list.push(<CartListGen prod_table={product} key={product.id} />);
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
							<th>Sub-Total</th>
						</tr>
					</thead>
					<tbody>
						{prod_list}
						<td>TOTAL</td>
						<td></td>
						<td></td>
						<td></td>
					</tbody>
				</table>
			</div>
			);
	}
}

export default CartTable;
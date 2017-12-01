import React from 'react';
import {HeaderBar} from './HeaderBarComponent'

class CartListGen extends React.Component{

	render(){
		const pro_data = this.props.prod_table;
		debugger;
		return(
			<tr>
				<td><img src={pro_data.url} height="100" width="50" /></td>
 				<td>{pro_data.name}</td>
 				<td>$ {pro_data.price}</td>
 				<td>{pro_data.quantity}</td>
 				<td>{pro_data.price * pro_data.quantity}</td>
 			</tr>
			);
	}
}

export default CartListGen;
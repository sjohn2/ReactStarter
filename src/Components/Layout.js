import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {productReducer} from '../Actions/cartAction';
import {populateProducts,initialCartAddition} from '../Actions/cartAction';

class Layout extends React.Component{
	componentWillMount(){

		var product_data = '';
		axios.get('http://127.0.0.1:8000/Products/')
		.then((response) => {
			product_data = response.data
			this.props.populateProducts(product_data);
		})
		.catch((error) => {
			console.log(error);
		});

		var cart_state = '';
		/*debugger;*/
		axios.get('http://127.0.0.1:8000/OrderCount/')
		.then((response)=>{
			const cart_obtained = response.data
			const cart_state = []
			for (var i = 0; i < cart_obtained.length; i++) {
				if(cart_obtained[i].quantity!=0){
					cart_state.push({'id':cart_obtained[i].id , 'quantity' : cart_obtained[i].quantity});
				}
			}
			this.props.initialCartAddition(cart_state);
		})
		.catch((error)=>{
			console.log(error);
		});

	}

	render(){
		return(
			this.props.children
			);
	}
}

const mapDispatchToProps = (dipatch) =>({
	populateProducts : (product_data) => dipatch(populateProducts(product_data)),
	initialCartAddition : (cart_state) => dipatch(initialCartAddition(cart_state))
});

export default connect(null,mapDispatchToProps)(Layout);
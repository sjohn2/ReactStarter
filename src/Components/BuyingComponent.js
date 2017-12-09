import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class BuyingItems extends React.Component {
	constructor(props){
		super(props);
		this.state = { 
			Report : '',
			Image : '',
		};
		
	}

	componentDidMount() {
		var fields = [
		{ element: "street-address", field: "Line1" },
		{ element: "street-address2", field: "Line2", mode: pca.fieldMode.POPULATE },
		{ element: "city", field: "City", mode: pca.fieldMode.POPULATE },
		{ element: "state", field: "ProvinceName", mode: pca.fieldMode.POPULATE },
		{ element: "postcode", field: "PostalCode" },
		{ element: "country", field: "CountryName", mode: pca.fieldMode.COUNTRY }
		];
		var options = {
			key: "ky32-tp33-mx58-px76"
		};

			this.aa = new pca.Address(fields, options);
	}

	sendAddress = () => {
		const products = this.props.products;
		const cartReducer_item  = this.props.cartQty;
		const prod_list = []
		var Report_data = ''
		if(cartReducer_item.length > 0 )
		{
			debugger;
			for (var i = 0; i < cartReducer_item.length; i++) {
				for (var j = 0; j < products.length; j++) {
					if(cartReducer_item[i].productId == products[j].id){
						prod_list[i] = products[j];
						prod_list[i].quantity = cartReducer_item[i].quantity;
						break;
					}
				}
			}
		}
		const data = {
			products_to_be_delivery : prod_list,
			street_address : document.querySelector("#street-address").value,
			city : document.querySelector("#city_1").value,
			state : document.querySelector("#state").value,
			postcode : document.querySelector("#postcode").value,
			country : document.querySelector("#country").value
			}
		var self = this;
		self.setState({Report: 'Loading... wait'})
		axios.post('http://127.0.0.1:8000/Address/',data)
		.then(function (response) {
			debugger;
			console.log(response);
			if(response.status == 200){
				Report_data  = 'Your order has been Successfully done!'
			}
			else{
				Report_data = 'Your order Denied !!!..'
			}
			self.setState({
				Report: Report_data,
				Image : 'https://s-media-cache-ak0.pinimg.com/originals/e1/38/a1/e138a174c33a48931521dcc5639d4a03.png',

			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	render(){
		return(
				<div className = "Buyingitems">
					<h1>Delivery Address : </h1>
						<div className="input-line">
							<label for="street-address"></label>
							<input id="street-address" type="text" placeholder="Street address" autofocus />
						</div>
						<div className="input-line">
							<label for="city_1"></label>
							<input id="city_1" type="text" placeholder="City" />
						</div>
						<div className="input-line">
							<label for="state"></label>
							<input id="state" type="text" placeholder="State/Province" />
						</div>
						<div className="input-line">
							<label for="postcode"></label>
							<input id="postcode" type="text" placeholder="Zip/Postcode" />
						</div>
						<div className="input-line">
							<label for="country"></label>
							<input id="country" type="text" placeholder="Country" />
						</div>
						<div className="submit_div">
							<label for="submit"></label>
							<button onClick = {this.sendAddress}>ORDER</button>
						</div>

					<div className="buying_detail">
						<h1><strong>{this.state.Report}</strong></h1>
						<img className="buying_image" src={this.state.Image}/>
					</div>
				</div>

			);
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

export default connect(mapStateToProps,null)(BuyingItems);

import React from 'react';

class HeaderBar extends React.Component{
	render(){
		const num=0;
		return(
			<div>
				<h1> Flip-Cart </h1>
					<i className="fa fa-shopping-cart"><span><h2>{num}</h2></span></i>
			</div>

			);
	}
}
export default HeaderBar;
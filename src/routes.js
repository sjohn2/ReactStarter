import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
}	from 'react-router-dom';

import LandingScreen from './container/LandingScreenContainer';
import DiscriptionScreen from './container/DiscriptionScreenContainer' ;
import CartScreen from './container/CartScreenContainer';
import NotFoundScreen from './Components/NotFoundScreenComponent';
debugger;
const Routes = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path = "/" component={LandingScreen}/>
				<Route exact path = "/details/:id" component={DiscriptionScreen}/>
				<Route exact path = "/cart" component = {CartScreen}/>
				<Route exact path = "*" component = {NotFoundScreen}/>
			</Switch>
		</div>
	</Router>
	);

export default Routes;
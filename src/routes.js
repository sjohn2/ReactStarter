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
import BuyingScreen from './container/BuyingScreenComponent';
import Layout from './Components/Layout';
/*debugger;*/
const Routes = () => (
	<Layout>
	<Router>
			<Switch>
				<Route exact path = "/" component={LandingScreen}/>
				<Route exact path = "/details/:id" component={DiscriptionScreen}/>
				<Route exact path = "/cart" component = {CartScreen}/>
				<Route exact path = "/buy" component = {BuyingScreen}/>
				<Route exact path = "*" component = {NotFoundScreen}/>
			</Switch>
	</Router>
	</Layout>
	);

export default Routes;
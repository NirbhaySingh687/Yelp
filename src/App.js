import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Router/Home";
import ResturantList from "./Router/ResturantList";
import UpdatePage from "./Router/UpdatePage";
import { ResturantsContextProvider } from './Context/ResturantsContext';

const App = ()=>{
	return (
		<div>
			<ResturantsContextProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/resturant/:id/" component={ResturantList}/>
					<Route exact path="/resturant/:id/update" component={UpdatePage}/>
				</Switch>
			</Router>
			</ResturantsContextProvider>
		</div>
		);
}

export default App;
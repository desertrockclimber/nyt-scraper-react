import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './components/Jumbotron.js';
import layout from "../page";
import { Component } from "./list";
// import logo from './logo.svg';
import './App.css';

const App = () =>
<Router>
	<div>
		<Switch>
			<Route exact path = "/" component = {layout} />
				
		</Switch>
	</div>
</Router>;


export default App;

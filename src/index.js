import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";

// Redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import clientApp from './reducers';
let store = createStore(clientApp);

const hist = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
	  <Router history={hist}>
	    <Switch>
	      {indexRoutes.map((prop, key) => {
	        return <Route path={prop.path} component={prop.component} key={key} />;
	      })}
	    </Switch>
	  </Router>
	</Provider>,
	document.getElementById("root")
);

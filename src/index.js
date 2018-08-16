import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HomeCustomer from './Components/HomeCustomer'

import {createStore} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><HomeCustomer /></Provider>, document.getElementById('root'));
registerServiceWorker();

// let rows = []
// rows= (this.props.customers === undefined) ? [] : this.props.customers.map((customer) => (
// <DisplayCustomer
// key={'customer-' + customer.id}
// customer = {customer}
// ></DisplayCustomer>
// )); 
 

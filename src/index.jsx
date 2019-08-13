import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout/checkout';
export { setLeaseCoProxy } from './config';

ReactDOM.render(<Checkout />, document.getElementById('checkout-app'));

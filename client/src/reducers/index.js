import { combineReducers } from 'redux';

import products from './products';
import auth from './auth';
import reviews from './reviews';

export default combineReducers({ products, auth, reviews });
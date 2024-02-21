import {combineReducers} from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers if you have
});

export default rootReducer;

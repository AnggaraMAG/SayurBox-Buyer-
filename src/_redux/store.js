import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger, promise} from '../middleware/index';
import categories from '../_reducers/categories';
import auth from '../_reducers/auth';
import product from '../_reducers/product';

const rootReducers = combineReducers({
  categories,
  auth,
  product,
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;

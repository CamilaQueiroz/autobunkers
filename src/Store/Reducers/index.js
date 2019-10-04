import { combineReducers } from 'redux';

import Stock from './Stock';
import textFilter from './textFilter';

export default combineReducers({
  Stock,
  textFilter,
});

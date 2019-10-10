import { combineReducers } from 'redux';

import Stock from './Stock';
import textFilter from './textFilter';
import Filter from './Filter';
import StockFilter from './StockFilter';
import NoFilter from './NoFilter';

export default combineReducers({
  Stock,
  textFilter,
  Filter,
  StockFilter,
  NoFilter,
});

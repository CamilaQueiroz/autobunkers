export default function StockFilter(state = [], action) {
  switch (action.type) {
    case 'FILTERED_STOCK':
      return action.filterStock;

    default:
      return state;
  }
}

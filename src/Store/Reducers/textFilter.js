export default function textFilter(state = '', action) {
  switch (action.type) {
    case 'FILTER_STOCK_TEXT':
      return action.inputValue;

    default:
      return state;
  }
}

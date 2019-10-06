export default function NoFilter(state = true, action) {
  switch (action.type) {
    case 'SHOW_STOCK_FILTER':
      return action.state;

    default:
      return state;
  }
}

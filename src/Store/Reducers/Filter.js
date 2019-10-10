export default function Filter(state = {}, action) {
  switch (action.type) {
    case 'FILTER_STOCK':
      return action.filter;

    default:
      return state;
  }
}

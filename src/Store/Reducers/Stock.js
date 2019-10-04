export default function Stock(state = [], action) {
  switch (action.type) {
    case 'ADD_STOCK':
      return action.stock;

    default:
      return state;
  }
}

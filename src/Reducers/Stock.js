export default function Stock(state = [], action) {
  switch (action.type) {
    case 'ADD_STOCK':
      return [...state, action.text];

    default:
      return state;
  }
}

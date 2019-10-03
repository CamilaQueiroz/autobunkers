export default function Stock(state = [], action) {
  switch (action.type) {
    case 'ADD_STOCK':
      return action.stock;

    case 'FILTER_STOCK':
      return state.filter(car =>
        car.descveiccompleto
          .toLowerCase()
          .includes(action.inputValue.toLowerCase())
      );

    default:
      return state;
  }
}

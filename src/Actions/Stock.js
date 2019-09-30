export function addStock(stock) {
  return {
    type: 'ADD_STOCK',
    text: stock,
  };
}

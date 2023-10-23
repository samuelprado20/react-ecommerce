// takes an array of products (each product is an object)
// returns the sum of all product prices of a new order
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + (product.price * product.quantity), 0)
}

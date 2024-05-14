/**
 * This function calculates the total price of a new order - Can be reuse and call in cart or order resume
 * @param {array} products cart: Is a products array  
 * @returns {number} totalPrice: Sum of the prices from all products
 */
export const totalPrice = (products) => {
    return products.reduce((total, producto) => total + producto.precio, 0);
}
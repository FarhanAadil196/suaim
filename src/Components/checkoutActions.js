// checkoutActions.js

// Action to add product to checkout/cart
export const addProductToCheckout = (product) => ({
  type: "ADD_TO_CHECKOUT",
  payload: product,
});

// Action to increase product quantity
export const increaseQuantity = (id, selectedSize) => ({
  type: "INCREASE_QUANTITY",
  payload: { id, selectedSize },
});

// Action to decrease product quantity
export const decreaseQuantity = (id, selectedSize) => ({
  type: "DECREASE_QUANTITY",
  payload: { id, selectedSize },
});
export const clearCheckout = () => ({
  type: "CLEAR_CART",
});


// Action to remove a product entirely from checkout/cart
export const removeProductFromCheckout = (id, selectedSize) => ({
  type: "REMOVE_FROM_CHECKOUT",
  payload: { id, selectedSize },
});

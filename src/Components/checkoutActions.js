// checkoutActions.js

export const addProductToCheckout = (product) => ({
  type: "ADD_TO_CHECKOUT",
  payload: product,
});

export const increaseQuantity = (id) => ({
  type: "INCREASE_QUANTITY",
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: "DECREASE_QUANTITY",
  payload: id,
});

export const removeProductFromCheckout = (id) => ({
  type: "REMOVE_FROM_CHECKOUT",
  payload: id,
});

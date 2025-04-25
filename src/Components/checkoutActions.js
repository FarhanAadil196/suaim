// checkoutActions.js
export const addProductToCheckout = (product) => {
    return {
      type: "ADD_PRODUCT_TO_CHECKOUT",
      payload: product,
    };
  };
  
  export const removeProductFromCheckout = (productId) => {
    return {
      type: "REMOVE_PRODUCT_FROM_CHECKOUT",
      payload: productId,
    };
  };
  
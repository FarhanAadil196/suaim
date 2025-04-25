// checkoutReducer.js
const initialState = {
    checkoutProducts: [],
  };
  
  const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CHECKOUT":
        return {
          ...state,
          checkoutProducts: [...state.checkoutProducts, action.payload], // Add product to checkout
        };
      case "REMOVE_PRODUCT_FROM_CHECKOUT":
        return {
          ...state,
          checkoutProducts: state.checkoutProducts.filter(
            (product) => product.id !== action.payload
          ), // Remove product from checkout
        };
      default:
        return state;
    }
  };
  
  export default checkoutReducer;
  
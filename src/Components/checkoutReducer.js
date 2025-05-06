// src/redux/checkoutReducer.js

const saveToLocalStorage = (items) => {
  localStorage.setItem("checkoutItems", JSON.stringify(items));
};

const initialState = {
  checkoutItems: JSON.parse(localStorage.getItem("checkoutItems")) || [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CHECKOUT": {
      const existing = state.checkoutItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );

      let updatedItems;
      if (existing) {
        updatedItems = state.checkoutItems.map((item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [
          ...state.checkoutItems,
          { ...action.payload, quantity: 1 },
        ];
      }

      saveToLocalStorage(updatedItems);
      return { ...state, checkoutItems: updatedItems };
    }

    case "INCREASE_QUANTITY": {
      const updatedItems = state.checkoutItems.map((item) =>
        item.id === action.payload.id &&
        item.selectedSize === action.payload.selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      saveToLocalStorage(updatedItems);
      return { ...state, checkoutItems: updatedItems };
    }

    case "DECREASE_QUANTITY": {
      const updatedItems = state.checkoutItems.map((item) =>
        item.id === action.payload.id &&
        item.selectedSize === action.payload.selectedSize
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      saveToLocalStorage(updatedItems);
      return { ...state, checkoutItems: updatedItems };
    }

    case "REMOVE_FROM_CHECKOUT": {
      const updatedItems = state.checkoutItems.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.selectedSize !== action.payload.selectedSize
      );
      saveToLocalStorage(updatedItems);
      return { ...state, checkoutItems: updatedItems };
    }
    case "CLEAR_CART":
      localStorage.removeItem("checkoutItems");
      return { ...state, checkoutItems: [] };

    default:
      return state;
  }
};

export default checkoutReducer;

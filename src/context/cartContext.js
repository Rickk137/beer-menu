import React from "react";

var CartStateContext = React.createContext();
var CartDispatchContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.payload.items };
    case "TOGGLE_DRAWER":
      return { ...state, active: !state.active };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  var [state, dispatch] = React.useReducer(cartReducer, {
    active: false,
    items: [],
  });
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

function useCartState() {
  var context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
}

function useCartDispatch() {
  var context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
}

function useCart() {
  return [useCartState(), useCartDispatch()];
}

export {
  CartProvider,
  useCartState,
  useCartDispatch,
  useCart,
  toggleSidebar,
  toggleDrawer,
};

// ###########################################################
function toggleSidebar(dispatch, items) {
  dispatch({
    items,
  });
}

function toggleDrawer(dispatch) {
  dispatch({
    type: "TOGGLE_DRAWER",
  });
}

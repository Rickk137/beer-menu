import React from "react";

var CartStateContext = React.createContext();
var CartDispatchContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DRAWER": {
      return { ...state, active: !state.active };
    }
    case "CREATE_ITEM": {
      const items = [...state.items];
      const {
        payload: { id, name, image_url, description, abv },
      } = action;

      const index = items.findIndex((item) => item.id === id);

      if (index === -1)
        items.push({ id, name, image_url, description, abv, count: 1 });
      else items[index].count++;

      return { ...state, items };
    }
    case "DELETE_ITEM": {
      const items = [...state.items];
      const {
        payload: { id },
      } = action;

      const index = items.findIndex((item) => item.id === id);

      items.splice(index, 1);

      return { ...state, items };
    }
    case "INCREASE_ITEM": {
      const items = [...state.items];
      const {
        payload: { id },
      } = action;

      const index = items.findIndex((item) => item.id === id);

      items[index].count++;

      return { ...state, items };
    }
    case "DECREASE_ITEM": {
      const items = [...state.items];
      const {
        payload: { id },
      } = action;

      const index = items.findIndex((item) => item.id === id);

      items[index].count--;

      if (!items[index].count) items.splice(index, 1);

      return { ...state, items };
    }
    case "BACK_UP": {
      localStorage.setItem("items", JSON.stringify(state.items));
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  var [state, dispatch] = React.useReducer(cartReducer, {
    active: false,
    items: JSON.parse(localStorage.getItem("items")) || [],
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
  toggleDrawer,
  createItem,
  deleteItem,
  increaseItem,
  decreaseItem,
};

// ###########################################################
function toggleDrawer(dispatch) {
  dispatch({
    type: "TOGGLE_DRAWER",
  });
}

function createItem(dispatch, payload) {
  dispatch({
    type: "CREATE_ITEM",
    payload,
  });
  dispatch({
    type: "BACK_UP",
  });
}

function deleteItem(dispatch, payload) {
  dispatch({
    type: "DELETE_ITEM",
    payload,
  });
  dispatch({
    type: "BACK_UP",
  });
}

function increaseItem(dispatch, payload) {
  dispatch({
    type: "INCREASE_ITEM",
    payload,
  });
  dispatch({
    type: "BACK_UP",
  });
}

function decreaseItem(dispatch, payload) {
  dispatch({
    type: "DECREASE_ITEM",
    payload,
  });
  dispatch({
    type: "BACK_UP",
  });
}

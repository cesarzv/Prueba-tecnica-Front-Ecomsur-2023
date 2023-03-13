import {
  GET_PRODUCTS,
  GET_DETAILS,
  CLEAN_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ONE_TO_CART,
  REMOVE_ONE_FROM_CART,
} from "../actions/index";

const initialState = {
  products: [],
  details: [],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: [...state.details, action.payload],
      };
    case CLEAN_PRODUCT:
      return {
        ...state,
        details: [],
      };
    case ADD_TO_CART:
      const itemToAdd = state.details[0]; // Suponiendo que solo se agrega un producto a la vez
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === itemToAdd._id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity++;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        itemToAdd.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
        };
      }
    case REMOVE_FROM_CART:
      const itemToRemove = state.cart.filter((c) => c._id !== action.payload);
      return {
        ...state,
        cart: itemToRemove,
      };
    case REMOVE_ONE_FROM_CART:
      let productToDelete = state.cart.find(
        (product) => product._id === action.payload
      );

      if (productToDelete.quantity > 1) {
        state = {
          ...state,
          cart: state.cart.map((c) =>
            c._id === action.payload ? { ...c, quantity: c.quantity - 1 } : c
          ),
        };
      } else {
        state = {
          ...state,
          cart: state.cart.filter((c) => c._id !== action.payload),
        };
      }

      return state;

    case ADD_ONE_TO_CART:
      let productToAdd = state.cart.find(
        (product) => product._id === action.payload
      );

      if (productToAdd.quantity >= 1) {
        state = {
          ...state,
          cart: state.cart.map((c) =>
            c._id === action.payload ? { ...c, quantity: c.quantity + 1 } : c
          ),
        };
      } else {
        state = {
          ...state,
          cart: state.cart.filter((c) => c._id !== action.payload),
        };
      }
      return state;

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;

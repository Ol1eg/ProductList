import {
  FETCH_PRODUCTS, 
  ADD_PRODUCT, 
  DELETE_PRODUCT, 
  SHOW_ADD_MODAL,
  HIDE_ADD_MODAL,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL,
} from './productsActions'

const defaultState = {
  products: [],
  showAddModal: false,
  showDeleteModal: false,
  selectedProductId: null
}

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload)
      };
    case SHOW_ADD_MODAL:
      return {
        ...state,
        showAddModal: true
      };
    case HIDE_ADD_MODAL:
      return {
        ...state,
        showAddModal: false
      };
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        showDeleteModal: true,
        selectedProductId: action.payload
      };
    case HIDE_DELETE_MODAL:
      return {
        ...state,
        showDeleteModal: false,
        selectedProductId: null
      };
    default:
      return state
  }
}

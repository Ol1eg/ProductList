import axios from "axios";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SHOW_ADD_MODAL = "SHOW_ADD_MODAL";
export const HIDE_ADD_MODAL = "HIDE_ADD_MODAL";
export const SHOW_DELETE_MODAL = "SHOW_DELETE_MODAL";
export const HIDE_DELETE_MODAL = "HIDE_DELETE_MODAL";

export const fetchProducts = () => async (dispatch) => {
    const response = await axios.get("http://localhost:5000/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const addProduct = (product) => async (dispatch) => {
    const response = await axios.post("http://localhost:5000/products", product);
    dispatch({ type: ADD_PRODUCT, payload: response.data });
    dispatch(hideAddModal());
};

export const deleteProduct = (productId) => async (dispatch) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    dispatch({ type: DELETE_PRODUCT, payload: productId });
    dispatch(hideDeleteModal());
};

export const showAddModal = () => ({
    type: SHOW_ADD_MODAL
});

export const hideAddModal = () => ({
    type: HIDE_ADD_MODAL
});

export const showDeleteModal = (productId) => ({
    type: SHOW_DELETE_MODAL,
    payload: productId
});

export const hideDeleteModal = () => ({
    type: HIDE_DELETE_MODAL
});
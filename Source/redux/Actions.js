import { ADD_TO_CART, CART_LIST } from "./Constant";
export const addtoCart = data => (dispatch) => {
    //console.log('action', data);
    dispatch({
        type: ADD_TO_CART,
        payload: data
    });
}
export const cartitem = data => (dispatch) => {
    //console.log('action', data);
    dispatch({
        type: CART_LIST,
        payload: data
    });
}
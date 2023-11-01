import { ADD_TO_CART } from "./Constant";
export const addtoCart = data => (dispatch) => {
    console.log('action', data);
    dispatch({
        type: ADD_TO_CART,
        payload: data
    });
}
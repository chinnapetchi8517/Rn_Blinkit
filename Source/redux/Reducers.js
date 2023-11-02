import { ADD_TO_CART, CART_LIST } from "./Constant";

const instialState = {
    isadditem: {},
    Cartitem: []

};

export const appReducer = (state = instialState, action) => {
    //console.log("reducer", action);
    switch (action.type) {

        case ADD_TO_CART:
            return { ...state, isadditem: action.payload };
        case CART_LIST:
            return { ...state, Cartitem: action.payload };

        default:
            return state;
    }
};
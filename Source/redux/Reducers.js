import { ADD_TO_CART } from "./Constant";

const instialState = {
    isadditem: {},

};

export const appReducer = (state = instialState, action) => {
    console.log("reducer", action);
    switch (action.type) {

        case ADD_TO_CART:
            return { ...state, isadditem: action.payload };

        default:
            return state;
    }
};
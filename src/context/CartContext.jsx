/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

//Creacion del contexto
const CartContext = createContext();

//Uso mismo del contexto con el hook
export const useCartContext = () => useContext(CartContext); 

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]};
        case "REMOVE_FROM_CART":
            return {...state, cart: state.cart.filter(product => product.id !== action.payload)}
        default:
            return state;
    }
}

const initialValue= {
    cart: []
}

//Provedor que nos facilita el uso del contexto
export const CartProvider = ({children}) => {  
    const [state, dispatch] = useReducer(cartReducer, initialValue)

    return (
        <CartContext.Provider value={{state, dispatch}}>
        {children}
        </CartContext.Provider>
    )
}
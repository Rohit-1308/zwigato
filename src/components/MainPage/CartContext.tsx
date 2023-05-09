import React, { createContext } from 'react'
import { cartItem } from '../../Models/addtoCartModel'
const cartContextProps = {}

type CartContextProviderProps = {
    children: React.ReactNode
}

const CartContext = createContext(cartContextProps)


export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    return <CartContextProvider>{children}</CartContextProvider>

}
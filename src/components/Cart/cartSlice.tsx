import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Items, cartItem } from '../../Models/addtoCartModel'

const initialState: { itemsMap: Map<number, cartItem> } = {
  itemsMap: new Map<number, cartItem>
}

import { enableMapSet } from 'immer'

enableMapSet()
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToItemsCart: (state, action: PayloadAction<{ i: cartItem }>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("in the reducer")
      state.itemsMap.set(action.payload.i.id, action.payload.i)
      console.log(state.itemsMap.get(action.payload.i.id))

    },
    deleteItemFromCart: (state, action: PayloadAction<{ id: number }>) => {
      console.log("in the reducer")
      state.itemsMap.delete(action.payload.id)

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToItemsCart, deleteItemFromCart } = cartSlice.actions

export default cartSlice.reducer
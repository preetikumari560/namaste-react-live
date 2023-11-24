import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

        name:"cart",
        initialState:{
        items:[]
        },
        reducers:{
            addItem:(state,action)=>{
            state.items.push(action.payload)
            
            },

     removeItem: (state, action) => {
  // Find the index of the first occurrence of the item with the specified id
  const indexToRemove = state.items.findIndex(i => i.id === action.payload);

  // Check if the item was found
  if (indexToRemove !== -1) {
    // Use slice to create a new array without the item at the specified index
    state.items = [...state.items.slice(0, indexToRemove), ...state.items.slice(indexToRemove + 1)];
  }
},


            emptyCart:(state)=>{
            state.items=[]
            }

        
        }

})

export const {addItem,removeItem,clearCart}  = cartSlice.actions

export default cartSlice.reducer
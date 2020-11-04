import { createSlice } from '@reduxjs/toolkit'

export const controllerSlice = createSlice({
    name: 'baskets',
    initialState: {
      basket: [],
    },
    reducers: {
      Add_To_Basket: (state, action) => {
       //  let x = [action.payload, ...state.basket]
      },
      Remove_From_Basket: (state, action) => {
        let remArray = state.basket.filter(({id})=> id !== action.payload.id)
        state.basket = remArray
      },
    },
  });
  
  export const { Add_To_Basket, Remove_From_Basket } = controllerSlice.actions;
  
  type item = {
      id: Number;
      name: string;
      price: Number;
      image: string;
      rating: string;
      description: string;
  }


  type stateType={
    baskets: {
      basket: item[]
    }
  }
  
  export const selectCount = (state: stateType) => state.baskets.basket;
  
  export default controllerSlice.reducer;
  
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    login: '',
    password: '',
    token: '',
    order: []
  },

  reducers: {
    logaut: (state,action) => {
      state.login = action.payload;
      state.password = action.payload;
      state.token = action.payload;
    },
    bucket: (state, action) => {
      state.order = action.payload
    },
    incrementQuantity: (state, action) => {
      const { index } = action.payload;
      state.order[index].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const { index } = action.payload;
      if (state.order[index].quantity > 0) {
        state.order[index].quantity -= 1;
    }},
    deleteOrder: (state, action) => {
      const index = action.payload;
      state.order.splice(index, 1);
    },
  }
});



export const {
  logaut,
  updateLogin,
  updatePassword,
  updateToken,
  bucket,
  incrementQuantity,
  decrementQuantity,
  deleteOrder,

} = counterSlice.actions
  
export default counterSlice.reducer
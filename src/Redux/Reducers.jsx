import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    login: '',
    password: '',
    token: '',
    order: []
  },

  reducers: {
    logaut: (state, action) => {
      state.login = action.payload;
      state.password = action.payload;
      state.token = action.payload;
    },

    bucket: (state, action) => {
      state.order = action.payload;
    },

    incrementQuantity: (state, action) => {
      const { index } = action.payload;
      state.order[index].quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const { index } = action.payload;
      if (state.order[index].quantity > 1) {
        state.order[index].quantity -= 1;
      }
    },

    deleteOrder: (state, action) => {
      const index = action.payload;
      state.order.splice(index, 1);
    },

    addDeliveryItem: (state, action) => {
      state.order.push(action.payload);
    },

    removeDeliveryItem: (state) => {
      const deliveryItemIndex = state.order.findIndex(item => item.Name === 'Доставка');
      if (deliveryItemIndex !== -1) {
        state.order.splice(deliveryItemIndex, 1);
      }
    },

    clearState: (state) => {

      state.login = '';
      state.password = '';
      state.token = '';
      state.order = [];
    },
  }
});

export const {
  logaut,
  bucket,
  incrementQuantity,
  decrementQuantity,
  deleteOrder,
  addDeliveryItem,
  removeDeliveryItem,
  clearState
} = counterSlice.actions;

export default counterSlice.reducer;

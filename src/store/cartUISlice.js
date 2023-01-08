import { createSlice } from "@reduxjs/toolkit";

const cartUISlice = createSlice({
  name: "cartUI",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUIActions = cartUISlice.actions;

export default cartUISlice;

import { createSlice } from "@reduxjs/toolkit";
import { setItems } from "../../services/functions";

export const basketSlice = createSlice({
  name: "basket",
  initialState: JSON.parse(localStorage.getItem("basket")) || [],
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload);
      setItems("basket", state);
    },
    delFromBasket: (state, action) => {
      state.splice(
        state.findIndex((el) => el.id === action.payload),
        1
      );
      setItems("basket", state);
    },
    clearBasket: (state) => {
      state.splice(0);
      localStorage.removeItem("basket");
    },
  },
});

export const { addToBasket, delFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;

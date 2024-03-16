import { createSlice } from "@reduxjs/toolkit";
import { setItems } from "../../services/functions";

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState: JSON.parse(localStorage.getItem("purchases")) || [],
  reducers: {
    addToPurchases: (state, action) => {
      state.push(...action.payload);
      setItems("basket", []);
      setItems("purchases", state);
    },
  },
});

export const { addToPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;

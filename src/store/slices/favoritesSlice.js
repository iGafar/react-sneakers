import { createSlice } from "@reduxjs/toolkit";
import { setItems } from "../../services/functions";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: JSON.parse(localStorage.getItem("favorites")) || [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
      setItems("favorites", state);
    },
    delFromFavorites: (state, action) => {
      state.splice(
        state.findIndex((el) => el.id === action.payload),
        1
      );
      setItems("favorites", state);
    },
  },
});

export const { addToFavorites, delFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

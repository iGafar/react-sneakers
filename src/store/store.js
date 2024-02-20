import { configureStore } from "@reduxjs/toolkit";
import sneakersSlice from "./slices/sneakersSlice";
import favoritesSlice from "./slices/favoritesSlice";
import purchasesSlice from "./slices/purchasesSlice";
import basketSlice from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    sneakers: sneakersSlice,
    favorites: favoritesSlice,
    purchases: purchasesSlice,
		basket: basketSlice,
  },
});

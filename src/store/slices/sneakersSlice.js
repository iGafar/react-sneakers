import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSneakers = createAsyncThunk(
  "sneakers/fetchSneakers",
  async () => {
    try {
      const { data } = await axios.get(
        "https://65c1f913f7e6ea59682a356c.mockapi.io/sneakers"
      );

      return data;
    } catch (error) {
      console.log(`Failed to fetch: ${error.message}`);
    }
  }
);

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState: {
    data: [],
    loading: "idle",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "fulfilled";
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export default sneakersSlice.reducer;

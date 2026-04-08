// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

// GET
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// POST
export const addProduct = createAsyncThunk("products/add", async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
});

// DELETE
export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// UPDATE
export const updateProduct = createAsyncThunk("products/update", async (data) => {
  const res = await axios.put(`${API_URL}/${data.id}`, data);
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle"
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      });
  }
});

export default productSlice.reducer;
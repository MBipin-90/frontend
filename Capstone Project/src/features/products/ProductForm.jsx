// src/features/products/ProductForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "./productSlice";

const ProductForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(
    editData || {
      productName: "",
      price: "",
      offerPrice: "",
      qty: "",
      description: "",
      added_date: "",
      photo: null
    }
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.productName) return alert("Name required");
    if (form.price <= 0) return alert("Invalid price");

    if (form.id) {
      dispatch(updateProduct(form));
      setEditData(null);
    } else {
      dispatch(addProduct(form));
    }

    setForm({
      productName: "",
      price: "",
      offerPrice: "",
      qty: "",
      description: "",
      added_date: "",
      photo: null
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="productName" placeholder="Name" value={form.productName} onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="offerPrice" type="number" placeholder="Offer Price" value={form.offerPrice} onChange={handleChange} />
      <input name="qty" type="number" placeholder="Qty" value={form.qty} onChange={handleChange} />
      <input name="added_date" type="date" value={form.added_date} onChange={handleChange} />
      <input name="photo" type="file" onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

      <button type="submit">
        {form.id ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm; 
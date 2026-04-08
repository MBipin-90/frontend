// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Index from "./website/pages/Index";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index/> }></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from "react";
import ProductForm from "./features/products/ProductForm";
import ProductList from "./features/products/ProductList";

function App() {
  const [editData, setEditData] = useState(null);

  return (
    <div>
      <h2>Product CRUD App</h2>

      <ProductForm editData={editData} setEditData={setEditData} />
      <ProductList setEditData={setEditData} />
    </div>
  );
}

export default App;
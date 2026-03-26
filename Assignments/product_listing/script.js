import React, { useState } from "react";
import "./App.css";

const productsData = [
  { id: 1, name: "Smartphone", category: "Electronics", price: 15000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", category: "Electronics", price: 55000, image: "https://via.placeholder.com/150" },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 700, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Shoes", category: "Clothing", price: 2000, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Watch", category: "Accessories", price: 3000, image: "https://via.placeholder.com/150" },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>Product Listing</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
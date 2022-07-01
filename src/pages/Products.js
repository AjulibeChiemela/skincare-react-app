import React from "react";
import { Link } from "react-router-dom";
import NavCol from "../components/NavCol";
import { products } from "../data/data";
import "./Products.scss";
const Products = () => {
  return (
    <div>
      <NavCol />
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-wrap">
              <img src={product.img_url} alt={product.name} />
              <h3>{product.name}</h3>
              <Link to={`/products/${product.id}`}>View Product</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

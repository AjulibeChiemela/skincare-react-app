import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img_url} alt={product.name} />
      <p>PRODUCT DESCRIPTION: {product.description}</p>
      <h3>CATEGORY: {product.category}</h3>
      <h3>PRICE: ${product.price}</h3>
      <div>
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default SingleProduct;

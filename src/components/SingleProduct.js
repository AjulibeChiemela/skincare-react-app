import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import NavCol from "./NavCol";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));
  return (
    <div>
      <NavCol />
      <div className="SProduct-wrap">
        <h1>{product.name}</h1>
        <img src={product.img_url} alt={product.name} />
        <p>
          <span>PRODUCT DESCRIPTION:</span> {product.description}
        </p>
        <p>
          <span>CATEGORY:</span> {product.category}
        </p>
        <p>
          <span>PRICE: $</span> {product.price}
        </p>
        <div>
          <button>Add to cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

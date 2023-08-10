import React from "react";

function Product({ elementProduct, addToCart }) {
  return (
    <div className="card ">
      <h4>{elementProduct.productName}</h4>
      <div className="card-body">
        <img
          src={elementProduct.image}
          alt=""
          style={{ width: "250px", height: "300px" }}
        />
        <h2>${elementProduct.price}</h2>
        <button onClick={() => addToCart(elementProduct)}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;

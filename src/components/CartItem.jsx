import React from "react";

function CartItem({ dataProduct, updateQuantity, closeItem, DeleteCart }) {
  return (
    <div>
      <div>
        <h1>Cart Product</h1>
        <button onClick={closeItem}>Close</button>
      </div>

      {dataProduct.map((e, i) => (
        <div className="product-1" key={i}>
          <div className="image">
            <img src={e.img} alt="" />
          </div>
          <div className="content-product">
            <h4>{e.productName}</h4>
            <span>
              by <b>jenny Matt</b> -Feb 12, 2022
            </span>
            <h2>${e.price}</h2>
            <div className="button-addtocart">
              <div className="buttons_added">
                <button
                  onClick={() => updateQuantity(e.id, e.quantity - 1)}
                  disabled={e.quantity <= 1}
                >
                  -
                </button>
                <p>{e.quantity}</p>
                <button onClick={() => updateQuantity(e.id, e.quantity + 1)}>
                  +
                </button>
                <button onClick={() => DeleteCart(e.id, e.quantity)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;

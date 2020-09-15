import React from "react";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;

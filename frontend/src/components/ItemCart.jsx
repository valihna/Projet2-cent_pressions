import React from "react";

function ItemCart({ name, type, price, sousTotal }) {
  return (
    <div>
      <div>ItemCart</div>
      <div>
        <h3 className="name">
          {name} - {type}
        </h3>
        <p className="price">${price}</p>
        <p className="sous-total">{sousTotal}</p>
      </div>
    </div>
  );
}

export default ItemCart;

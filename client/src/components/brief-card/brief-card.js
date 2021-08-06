import React from "react";
import { useStoreContext } from "../../utils/globalState";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
  } = item;


  return (
    <div className="card px-1 py-1">
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      <div>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default ProductItem;

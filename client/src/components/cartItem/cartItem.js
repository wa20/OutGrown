import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
// import { Link } from "react-router-dom";
import { Icon, Image, Card } from "semantic-ui-react";

// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <Card style={{ margin: "0.3em" }}>
        <Card.Content>
          {/* <Link to={`/products/${_id}`}> */}
            <Image
              floated="left"
              // size="small"
              rounded
              src={`/images/${item.image}`}
              alt={item.name}
            />
          {/* </Link> */}

          <Card.Header style={{ fontSize: "12px" }}>{item.name}</Card.Header>
          <Card.Meta style={{ margin: "10px" }}>£{item.price}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
            floated="left"
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            floated="right"
          >
            <Icon name="delete" />
          </span>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CartItem;

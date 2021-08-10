import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Image, Segment } from 'semantic-ui-react';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function MarketplaceCard(item) {
  const [state, dispatch] = useStoreContext();
  const classes = useStyles();
  const {
    image,
    name,
    _id,
    price,
    description,
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <Card centered style={{ height: '55ex' }}>
      <Card.Content  >
        <Segment>
          <Image style={{ height: '25ex' }} src={`/images/${image}`} ui={false} />
        </Segment>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>${price}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
        <Button variant="contained" color="primary" onClick={addToCart}>
          Add to cart
        </Button>
      </Card.Content>
    </Card>
  );
}

export default MarketplaceCard;
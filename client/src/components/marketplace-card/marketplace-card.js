import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Button } from "semantic-ui-react";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    // margin: 100,
  },
  media: {
    height: 350,
    // width: '100%',
    objectFit: "scale-down",
  },
});

function MarketplaceCard(item) {
  const [state, dispatch] = useStoreContext();
  const classes = useStyles();
  const { image, name, _id, price, description } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
   
    <div>
      <Card
        className={classes.root}
        style={{ margin: "20px", marginBottom: "10px"}}
      >
        <CardActionArea>
          <Link to={`/products/${_id}`}>
            <CardMedia
              className={classes.media}
              image={`/images/${image}`}
              title={name}
              contain
            />
          </Link>

          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              <b>£{price}</b>
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {/* {description} */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={addToCart} variant="outlined" fluid content="Add to Basket" icon="shopping bag" labelPosition='right'/>
        </CardActions>
      </Card>
    </div>
  );
}

export default MarketplaceCard;

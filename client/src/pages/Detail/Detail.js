import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Button,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import { useStoreContext } from "../../utils/globalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../../utils/actions";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Footer from "../../components/footer/footer";
// import Nav from "../../components/navbar/navbar"
import Typography from "@material-ui/core/Typography";


function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  return (
    <>
      {/* <Nav /> */}
      <div>
        {currentProduct && cart ? (
          <Segment style={{ padding: "4em 6em" }} vertical>
            <Grid stackable columns={2}>
              <Grid.Column>
                <Image
                  src={`/images/${currentProduct.image}`}
                  size="large"
                  centered
                  rounded
                />
              </Grid.Column>

              <Grid.Column>
                <Grid.Row style={{ padding: "2em 0.5em" }}>
                  <Header as="h1" textAlign="center">
                    {currentProduct.name}
                  </Header>
                </Grid.Row>

                <Grid.Row style={{ padding: "2em 0.5em" }}>
                  <Header as="h5">{currentProduct.description}</Header>
                </Grid.Row>

                <Grid.Row style={{ padding: "2em 0.5em" }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ fontSize: "20px" }}
                  >
                    <strong>Price: </strong> £{currentProduct.price}{" "}
                  </Typography>
                </Grid.Row>
                <Divider horizontal>SELECT</Divider>
                <Grid.Row style={{ padding: "4em 0.5em" }}>
                  <div>
                    <Button
                      style={{ marginBottom: "1em" }}
                      onClick={addToCart}
                      fluid
                      compact
                      content="Add to Cart"
                      icon="shopping bag"
                      labelPosition="right"
                      color="black"
                    />

                    <Button
                      style={{ marginTop: "1em" }}
                      disabled={!cart.find((p) => p._id === currentProduct._id)}
                      onClick={removeFromCart}
                      fluid
                      compact
                      content=" Remove from Cart"
                      icon="delete"
                      labelPosition="right"
                      color="black"
                    />
                  </div>
                </Grid.Row>


              </Grid.Column>
            </Grid>
            <Grid style={{ padding: "2em 0em" }} centered>
                  <Button.Group centered>
                    <Button href="/marketplace">Back to Marketplace</Button>
                    <Button.Or />
                    <Button href="/" positive>
                      Back to Homepage
                    </Button>
                  </Button.Group>

                  {/* <Link to="/marketplace">← Back to Marketplace</Link> <br />
                  <Link to="/home">← Back to Homepage</Link> */}
                </Grid>
          </Segment>
         
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default Detail;

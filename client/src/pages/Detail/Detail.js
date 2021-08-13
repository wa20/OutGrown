import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Grid, Image, Segment, Header, Button } from 'semantic-ui-react'
import { useStoreContext } from '../../utils/globalState';
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
} from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Footer from "../../components/footer/footer"
import Nav from "../../components/navbar/navbar"
import Typography from '@material-ui/core/Typography';


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
                idbPromise('products', 'put', product);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise('products', 'get').then((indexedProducts) => {
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
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1 },
            });
            idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id,
        });

        idbPromise('cart', 'delete', { ...currentProduct });
    };

    return (
        <>
            <Nav />
            <div>
                {currentProduct && cart ? (
                    <Segment>
                        <Grid stackable columns={2}>
                            <Grid.Column>
                                <Image src={`/images/${currentProduct.image}`} />
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h1' textAlign='center'>{currentProduct.name}</Header>
                                <Header as='h6' >{currentProduct.description}</Header>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Price:</strong>${currentProduct.price}{' '}
                                </Typography>

                                <p>
                                    <Button style={{ marginRight: '1em' }} positive onClick={addToCart}>Add to Cart</Button>
                                    <Button
                                        disabled={!cart.find((p) => p._id === currentProduct._id)}
                                        onClick={removeFromCart}
                                    >
                                        Remove from Cart
                                    </Button>

                                </p>
                                <Link to="/marketplace">← Back to Marketplace</Link> <br />
                                <Link to="/home">← Back to Homepage</Link>

                            </Grid.Column>
                        </Grid>
                    </Segment>
                ) : null}
            </div>
            <Footer />
        </>
    );
}

export default Detail;
{/* <div className="container my-1">
            <Link to="/">← Back to Products</Link>

            <h2>{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>

            <p>
                <strong>Price:</strong>${currentProduct.price}{' '}
                <button onClick={addToCart}>Add to Cart</button>
                <button
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
                >
                Remove from Cart
                </button>
            </p>

            <img
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
            />
            </div> */
}
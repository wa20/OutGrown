import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../components/footer/footer"
import Nav from "../../components/navbar/navbar"
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { makeStyles } from '@material-ui/core/styles';
import Auth from '../../utils/auth'

import {
    Container,
    Header,
    Segment,
    Sidebar,
    Visibility,
    Button,
    Icon,
    Card
} from 'semantic-ui-react'


function OrderHistory() {
    const userId = Auth.getUserID();
    const { data } = useQuery(QUERY_USER, { variables: { _id: userId } });
    let user;

    if (data) {

        user = data.user;
    }
    return (
        <>

            <Nav />

            <div className="container my-1">


                {user ? (
                    <>
                        {/* <Segment style={{ padding: '5em 0em' }} vertical textAlign="center">
                            <Header>Order History for {user.firstName} {user.lastName}</Header>
                        </Segment> */}


                        <Segment style={{ padding: '5em 0em' }} vertical textAlign="center">

                            {user.orders.map((order) => (
                                <div key={order._id} className="my-2">
                                    <h3>
                                        {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                    </h3>
                                    <div className="flex-row">
                                        {order.products.map(({ _id, image, name, price }, index) => (
                                            <div key={index} className="card px-1 py-1">
                                                <Link to={`/products/${_id}`}>
                                                    <img alt={name} src={`/images/${image}`} />
                                                    <p>{name}</p>
                                                </Link>
                                                <div>
                                                    <span>${price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Segment>
                    </>
                ) : null}
            </div>

            <Segment style={{ padding: '5em 0em' }} vertical textAlign="center">

                <Button animated>
                    <Button.Content visible>RETURN TO PROFILE</Button.Content>
                    <Button.Content href="/profile" hidden>
                        <Icon name='arrow left' />
                    </Button.Content>
                </Button>

            </Segment>
            <Footer />
        </>
    );
}

export default OrderHistory;

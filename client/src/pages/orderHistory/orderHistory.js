import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

import Auth from '../../utils/auth'


function OrderHistory() {
    const userId = Auth.getUserID();
    console.log("User:", userId);
    const { data } = useQuery(QUERY_USER, { variables: { _id: userId } });
    let user;
    console.log("Data:", data);

    if (data) {

        user = data.user;
    }

    return (
        <>
            <div className="container my-1">
                <Link to="/">← Return to profile</Link>

                {user ? (
                    <>
                        <h2>
                            Order History for {user.firstName} {user.lastName}
                        </h2>
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
                    </>
                ) : null}
            </div>
        </>
    );
}

export default OrderHistory;

import React from "react";
import "./profilePage.css"

// import Button from '@material-ui/core/Button';

import {
    Button,
    Icon,
    Segment,
} from "semantic-ui-react";


const ViewOrderHistory = () => (
    <div>

        <Segment style={{ padding: '5em 0em' }} vertical textAlign="center">

            <Button animated>
                <Button.Content visible>VIEW ORDER HISTORY</Button.Content>
                <Button.Content href="/orderHistory" hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>

        </Segment>


    </div>

)

export default ViewOrderHistory
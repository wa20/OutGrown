import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';


function MarketplaceCard(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    description,
  } = item;

  return (
    <Card centered style={{ height: 400 }}>
      <Card.Content  >
        <Segment>
          <Image  src={`/images/${image}`} ui={false} />
        </Segment>
      </Card.Content>

      <Card.Content >
        <Card.Header>{name}</Card.Header>
      </Card.Content>

      <Card.Content >
        <Card.Meta>
          <span>${price}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      
    </Card>
  );
}

export default MarketplaceCard;
{/* <div className="card px-1 py-1">

        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>

      <div>
        <span>${price}</span>
      </div>

    </div> */}
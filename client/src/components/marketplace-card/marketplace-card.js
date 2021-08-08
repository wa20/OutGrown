import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Image, Segment } from 'semantic-ui-react'

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
    <Card centered style={{ height: '50ex' }}>
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
      </Card.Content>
    </Card>
  );
}

export default MarketplaceCard;
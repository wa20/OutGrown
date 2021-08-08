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
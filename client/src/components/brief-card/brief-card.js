import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';


function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    description,
  } = item;

  return (
    <Card fluid centered style={{ height: 450 }}>
      <Card.Content centered >
        <Segment>
          <Image centered src={`/images/${image}`} ui={false} />
        </Segment>
      </Card.Content>

      <Card.Content >
        <Card.Header>{name}</Card.Header>
      </Card.Content>

      <Card.Content >
        <Card.Meta>
          <span>${price}</span>
        </Card.Meta>
        <Card.Description style={{ height: 450 }}>
          {description}
        </Card.Description>
      </Card.Content>
      
    </Card>
  );
}

export default ProductItem;

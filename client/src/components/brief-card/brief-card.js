import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Icon, Image, Segment, Divider } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


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
    <Card fluid centered style={{ height: '82ex' }}>
      <Card.Content centered >
        <Segment>
        <Link to={`/products/${_id}`}>
          <Image style={{ height: '50ex' }} centered src={`/images/${image}`} ui={false} />
        </Link>
        </Segment>
        <Card.Header>{name}</Card.Header>
        <Divider/>
        <Card.Description>
          {description}
        </Card.Description>        
        <Card.Meta>
          <span>${price}</span>
        </Card.Meta>
      </Card.Content>   
    </Card>
  );
}

export default ProductItem;

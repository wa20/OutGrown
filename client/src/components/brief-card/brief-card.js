import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Icon, Image } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  size: {
    maxHeight: '200px',
  },
});

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();
  const classes = useStyles();
  const {
    image,
    name,
    _id,
    price,
    description,
  } = item;

  return (
    <Card centered fluid>
      <Image src={`/images/${image}`} wrapped ui={false}/>
      <Card.Content className={classes.size}>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
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

export default ProductItem;

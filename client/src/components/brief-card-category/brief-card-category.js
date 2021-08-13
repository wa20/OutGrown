import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Divider, Image, Segment } from 'semantic-ui-react'



function CategoryItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    description,
    _id,
  } = item;

  return (
    <Card fluid centered style={{ height: '82ex' }}>
      <Card.Content centered >
        <Segment>
            <Image style={{ height: '50ex' }} centered src={`/images/${image}`} ui={false} />
        </Segment>
        <Card.Header >{name}</Card.Header>
        <Divider/>
        <Card.Description textAlign='center'>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CategoryItem;
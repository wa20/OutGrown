import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Card, Divider, Icon, Image, Segment } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';


function CategoryItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    description,
    _id,
  } = item;

  return (
    <Card fluid centered style={{ height: 450 }}>
      <Card.Content centered >
            <Segment>
                <Image centered src={`/images/${image}`} ui={false} />
            </Segment>
        </Card.Content>
        <Card.Content >
            <Card.Header >{name}</Card.Header>
            <Divider/>
        </Card.Content>
        <Card.Description style={{ height: 450 }}>
            {description}
        </Card.Description>
    </Card>
  );
}

export default CategoryItem;
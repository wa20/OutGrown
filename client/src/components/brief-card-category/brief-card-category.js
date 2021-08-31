import React from "react";
import { useStoreContext } from "../../utils/globalState";
// import { Card, Divider, Image, Segment } from 'semantic-ui-react'

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
  media: {
    minHeight: 450,
    // width: '100%',
    objectFit: "scale-down",
  },
});



function CategoryItem(item) {
  const [state, dispatch] = useStoreContext();
  const classes = useStyles();

  const {
    image,
    name,
    description,
    _id,
  } = item;

  return (
    // <Card fluid centered style={{ height: '82ex' }}>
    //   <Card.Content centered >
    //     <Segment>
    //         <Image style={{ height: '50ex' }} centered src={`/images/${image}`} ui={false} />
    //     </Segment>
    //     <Card.Header >{name}</Card.Header>
    //     <Divider/>
    //     <Card.Description textAlign='center'>
    //       {description}
    //     </Card.Description>
    //   </Card.Content>
    // </Card>

<div>
      <Card
        className={classes.root}
        style={{ margin: "20px", marginBottom: "10px"}}
      >
        <CardActionArea>
          {/* <Link to={`/products/${_id}`}> */}
            <CardMedia
              className={classes.media}
              image={`/images/${image}`}
              title={name}
              contain
            />
          {/* </Link> */}

          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">

            {description}

            </Typography>

            
          </CardContent>
        </CardActionArea>
       
      </Card>
    </div>



  );
}

export default CategoryItem;
import React from "react";
import { useStoreContext } from "../../utils/globalState";
import { Link } from "react-router-dom";
// import {  Image, Segment, Divider, Button } from 'semantic-ui-react'
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
    height: 450,
    // width: '100%',
    objectFit: "scale-down",
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
    // <Card fluid centered style={{ height: '82ex' }}>
    //   <Card.Content centered >
    //     <Segment>
    //       <Link to={`/products/${_id}`}>
    //         <Image style={{ height: '50ex' }} centered src={`/images/${image}`} ui={false} />
    //       </Link>
    //     </Segment>
    //     <Card.Header>{name}</Card.Header>
    //     <Divider />
    //     <Card.Description>
    //       {description}
    //     </Card.Description>
    //     <Card.Meta>
    //       <span>${price}</span>
    //     </Card.Meta>
    //   </Card.Content>
    // </Card>





<div>
      <Card
        className={classes.root}
        style={{ margin: "20px", marginBottom: "10px"}}
      >
        <CardActionArea>
          <Link to={`/products/${_id}`}>
            <CardMedia
              className={classes.media}
              image={`/images/${image}`}
              title={name}
              contain
            />
          </Link>

          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              <b>£{price}</b>
            </Typography>

            
          </CardContent>
        </CardActionArea>
       
      </Card>
    </div>





  );
}

export default ProductItem;

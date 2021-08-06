// import React from 'react'
import { segement, Container, Grid, Image } from 'semantic-ui-react'

// const extra = (
//   <a>
//     <Icon name='user' />
//     16 Friends
//   </a>
// )

// const MarketProducts = () => (
// <Container style={{ padding: '1em 0em' }}>
// <Grid container stackable>
// <Grid.Column centered mobile={16} tablet={8} computer={4}>
//   <Card
//     image='/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     extra={extra}
//   />
// </Grid.Column>
// <Grid.Column centered mobile={16} tablet={8} computer={4}>
//   <Card
//     image='/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     extra={extra}
//   />
// </Grid.Column>
// <Grid.Column centered mobile={16} tablet={8} computer={4}>
//   <Card
//     image='/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     extra={extra}
//   />
// </Grid.Column>
// <Grid.Column centered mobile={16} tablet={8} computer={4}>
//   <Card
//     image='/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     extra={extra}
//   />
// </Grid.Column>
// <Grid.Column centered mobile={16} tablet={8} computer={4}>
//   <Card
//     image='/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     extra={extra}
//   />
// </Grid.Column>
// </Grid>
// </Container>
// )

// export default MarketProducts


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Stock1 from '../../assets/stock1.jpg'
import Stock2 from '../../assets/stock2.jpg'
import Stock3 from '../../assets/stock3.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MarketProducts() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    // {products.map((product) => (
    
    <Container style={{ padding: '1em 0em' }}> 
    <Card className={classes.root}>
      <CardHeader title="Product Name" 
      action={
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        }/> 
      <CardMedia
        className={classes.media}
        image={Stock1}
        title="Paella dish"
        height="150px"
      />
      <CardActions disableSpacing>  
      <Typography gutterBottom variant="h5" component="h2">
            £{}
          </Typography>
          
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography description>Method:</Typography>
          <Typography description>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse>
      <Button variant="contained" color="default" disableElevation style={{margin:"15px"}}>
          Add To Bag
        </Button>
        <Button variant="contained" color="red" disableElevation style={{margin:"0px"}}>
          Info
        </Button>
    </Card>
    </Container>


    // ))}


  );
}
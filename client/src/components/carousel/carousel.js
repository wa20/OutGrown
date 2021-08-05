import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../../assets/outgrownLogo.png'
import Stock1 from '../../assets/stock1.jpg'
import Stock2 from '../../assets/stock2.jpg'
import Stock3 from '../../assets/stock3.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Segment, Image } from 'semantic-ui-react'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });



export default function DefaultCarousel() {

    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item>
                <Segment size='small'>
                    <Image src={Stock1} centered className="d-block w-100"/>
                </Segment>
            </Carousel.Item>
            <Carousel.Item>
                <Segment size='small'>
                    <Image src={Stock2}  centered className="d-block w-100"/>
                </Segment>
            </Carousel.Item>
            <Carousel.Item>
                <Segment size='small'>
                    <Image src={Stock3}  centered className="d-block w-100"/>
                </Segment>
        </Carousel.Item>
      </Carousel>
    );
  }
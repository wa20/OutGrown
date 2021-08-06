import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../../assets/outgrownLogo.png'
import Stock1 from '../../assets/stock1.jpg'
import Stock2 from '../../assets/stock2.jpg'
import Stock3 from '../../assets/stock3.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { Segment, Image } from 'semantic-ui-react'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 100,
    },
  });



export default function CarouselBanner() {

    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade  style={{ padding: '1em 0em' }}>
            <Carousel.Item style={{height:"40vh"}}>
                <Segment size='small'>
                    <Image src={Stock1} centered className="d-block w-100"/>
                </Segment>
            </Carousel.Item>
            <Carousel.Item style={{height:"40vh"}}>
                <Segment size='small'>
                    <Image src={Stock2}  centered className="d-block w-100"/>
                </Segment>
            </Carousel.Item>
            <Carousel.Item style={{height:"40vh" }}>
                <Segment size='small'>
                    <Image src={Stock3}  centered className="d-block w-100"/>
                </Segment>
        </Carousel.Item>
      </Carousel>
    );
  }
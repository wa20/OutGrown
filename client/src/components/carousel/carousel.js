import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BriefCard from '../brief-card/brief-card';
import { useStoreContext } from '../../utils/globalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { makeStyles } from '@material-ui/core/styles';
import { Segment, Image } from 'semantic-ui-react'
import Logo from '../../assets/outgrownLogo.png'

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

    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
      if (data) {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: data.products,
        });
        data.products.forEach((product) => {
          idbPromise('products', 'put', product);
        });
      } else if (!loading) {
        idbPromise('products', 'get').then((products) => {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: products,
          });
        });
      }
    }, [data, loading, dispatch]);
  
    function filterProducts() {
      if (!currentCategory) {
        return state.products;
      }
  
      return state.products.filter(
        (product) => product.category._id === currentCategory
      );
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
            {filterProducts().map((product) => (
              <Carousel.Item>
                <Segment size='small'>
                  <BriefCard
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  />
                </Segment>
              </Carousel.Item>  
          ))}
      </Carousel>
    );
  }
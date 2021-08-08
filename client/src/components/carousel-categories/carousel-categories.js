import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BriefCardCategory from '../brief-card-category/brief-card-category';
import { useStoreContext } from '../../utils/globalState';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import {
    UPDATE_CATEGORIES,
  } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Divider, Header } from 'semantic-ui-react'

import "./carousel.css"

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    cardPadding: {
      paddingTop: 10,
    },
    cardSize:{
      height: 600
    }
  });



export default function DefaultCarousel() {
    const classes = useStyles();
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);


    useEffect(() => {
        if (categoryData) {
          dispatch({
            type: UPDATE_CATEGORIES,
            categories: categoryData.categories,
          });
          categoryData.categories.forEach((category) => {
            idbPromise('categories', 'put', category);
          });
        } else if (!loading) {
          idbPromise('categories', 'get').then((categories) => {
            dispatch({
              type: UPDATE_CATEGORIES,
              categories: categories,
            });
          });
        }
      }, [categoryData, loading, dispatch]);

      function filterCategories() {
          return state.categories;
      }
  
    return (
      <Card  centered className="py-2" style={{width:600}}>
        <Header> categories</Header>
          <Carousel activeIndex={index} onSelect={handleSelect} >
              {filterCategories().map((category) => (
                <Carousel.Item centered>
                    <BriefCardCategory
                    key={category._id}
                    _id={category._id}
                    image={category.image}
                    name={category.name}
                    description={category.description}
                    />
                </Carousel.Item>  
            ))}
          </Carousel>
      </Card>
    );
  }
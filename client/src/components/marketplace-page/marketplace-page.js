import React, { useEffect, useState } from 'react'

import {
  Grid,
  Input,
  Dropdown,
} from 'semantic-ui-react'
import { useStoreContext } from '../../utils/globalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { makeStyles } from '@material-ui/core/styles';
import MarketplaceCard from '../../components/marketplace-card/marketplace-card';
import { Container } from 'semantic-ui-react'
  
const MarketplaceResults = () => {
  const [state, dispatch] = useStoreContext();
  // const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterChoice, setfilterChoice] = useState("name");
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
    if (!searchTerm) {
      return state.products;
    }
    if (filterChoice === 'name') {
      return state.products.filter(
        (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterChoice === 'category') {
      return state.products.filter(
        (product) => product.category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
  }

  const options = [
    { key: 'name', text: 'Item name', value: 'name' },
    { key: 'categories', text: 'Categories', value: 'category' },
  ]

  return (
      <div> 
        <Input
          centered
          fluid
          icon='search'
          iconPosition='left'
          style = {{marginLeft:'20%', marginRight:'20%', marginBottom:'1%', padding:'1ex', maxWidth:'1200px'}}
           action={
            <select  
              onChange={(event) => {
                setfilterChoice(event.target.value)
              }} 
              >
              {options.map((option) => (
                <option value={option.value}>{option.text}</option>
              ))}
            </select>
/*            <Dropdown
             
              button 
              basic 
              floating 
              options={options} 
              defaultValue='page'
              onChange={(event) => {
                setFilterOption(event.target.value)
              }}
              />*/
          } 
          type="text" 
          placeholder='Search...'
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }} 
        />
        {state.products.length ? (
          <div className="flex-row" style = {{maxWidth:"2000px", paddingLeft:"20%", paddingRight:"20%"}} >
            {filterProducts().map((product) => (
                <MarketplaceCard
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                centered
                /> 
          ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
        
      </div>
  );
};

export default MarketplaceResults;
        
import React, { useEffect } from 'react'

import {
  Grid,
} from 'semantic-ui-react'
import { useStoreContext } from '../../utils/globalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { makeStyles } from '@material-ui/core/styles';
import MarketplaceCard from '../../components/marketplace-card/marketplace-card';
  
const MarketplaceResults = () => {
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
      <div> 
        {state.products.length ? (
          <div className="flex-row">
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
        
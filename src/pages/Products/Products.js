import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;

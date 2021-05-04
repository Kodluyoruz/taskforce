import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

import styles from './Detail.style';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image source={{uri: data.image}} style={styles.image} />
        </View>
        <View style={styles.body_container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.price}>{data.price} TL</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

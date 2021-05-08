import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return <LottieView source={require('../../asstes/loading.json')} autoPlay />;
}

export default Loading;

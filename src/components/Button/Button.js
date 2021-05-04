import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';

import styles from './Button.style';

const Button = ({text, onPress, loading, icon}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles.button_container}>
          <Text style={styles.title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

import {StyleSheet, Platform} from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body_container: {
    flex: 1,
  },
  header: {
    color: colors.darkgreen,
    margin: 5,
    fontSize: Platform.OS === 'android' ? 120 : 160,
  },
});

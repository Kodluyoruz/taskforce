import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1},
  body_container: {
    padding: 10,
  },
  footer_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  image_container: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#bdbdbd',
  },
  title: {fontWeight: 'bold', fontSize: 25},
  desc: {fontStyle: 'italic', marginVertical: 5},
  price: {marginTop: 20, fontWeight: 'bold', fontSize: 30, textAlign: 'right'},
});

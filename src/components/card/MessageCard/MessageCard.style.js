import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#00897b',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  inner_container: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: 'white',
    fontSize: 13,
    fontStyle: 'italic',
  },
  user: {
    color: 'white',
    fontSize: 13,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  dislike_count_contanier: {
    backgroundColor: colors.darkgreen,
    padding: 3,
    borderRadius: 20,
    marginRight: 3,
  },
  dislike_contanier: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  dislike_text: {
    color: colors.darkgreen,
    fontWeight: 'bold',
  },
  dislike_count_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'flex-end',
  },
});

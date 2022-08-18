import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
  },
  card: {
    width: 158,
    height: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 3,
    elevation: 2,
    margin: 10,
    padding: 10,
  },
  imgBlock: {
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
  bold: {
    fontWeight: 'bold',
  },
  discount: {
    color: '#00A8F3',
    marginLeft: 10,
  },
  lined: {
    color: 'lightgray',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
});

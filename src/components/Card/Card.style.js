import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    width: 158,
    minHeight: 160,
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
    width: '100%',
    minHeight: 100,
  },
  bold: {
    fontWeight: 'bold',
  },
});

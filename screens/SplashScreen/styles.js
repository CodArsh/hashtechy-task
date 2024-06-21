import {StyleSheet} from 'react-native';
import {BaseColors} from '../../config/theme';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
    padding: 15,
    backgroundColor: BaseColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    borderRadius: 100,
    height: 120,
    width: 120,
  },
});
export default styles;

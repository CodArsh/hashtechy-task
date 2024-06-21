import {StyleSheet} from 'react-native';
import {BaseColors} from '../../config/theme';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
    padding: 5,
    backgroundColor: BaseColors.black,
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listIcon: {
    marginRight: 10,
  },
  list: {
    height: 80,
    borderWidth: 0.5,
    borderColor: BaseColors.white,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  title: {
    color: BaseColors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  currentStatus: {color: BaseColors.white, marginTop: 15, fontSize: 17},
  selectedStatus: {
    color: BaseColors.yellow,
    marginTop: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  modalTitle: {
    color: BaseColors.yellow,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  description: {
    color: BaseColors.yellow,
    fontSize: 18,
    marginTop: 8,
  },
  actions: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 10,
  },
  actionBtn: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
  },
  leftArea: {
    width: '50%',
  },
  addText: {
    color: BaseColors.black,
    fontSize: 20,
    textAlign: 'center',
  },
  sortBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  empty: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalStyle: {
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  containerStyle: {
    backgroundColor: BaseColors.white50,
    padding: 20,
    height: 280,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    borderColor: BaseColors.white,
    width: '100%',
  },
});
export default styles;

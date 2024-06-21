import {TouchableOpacity, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderBar from '../../components/HeaderBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {BaseColors} from '../../config/theme';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from '../../components/ActionButton';
import {setOrderData} from '../../redux/actions/actions';
import {isEmpty, isArray} from 'lodash';
import Toast from 'react-native-toast-message';
import {Modal, Portal} from 'react-native-paper';
import Filter from '../../components/Filter';

const Home = ({navigation}) => {
  const orderData = useSelector(state => state.rootReducer.orderData);
  const dispatch = useDispatch();

  // model related
  const [checked, setChecked] = useState('All');
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [currentStatus, setCurrentStatus] = useState('All');

  // This function will Add new item in list
  const handleAddNewItem = () => {
    navigation.navigate('AddTask');
    setTimeout(() => {
      setCurrentStatus('All');
    }, 500);
  };

  // This function will filter the list according to selected status
  const handleFilter = () => {
    if (isEmpty(orderData)) {
      Toast.show({
        type: 'error',
        text1: 'Oops! List is empty',
        text2: 'There is no any data found in list',
        position: 'bottom',
      });
    } else {
      showModal();
    }
  };

  // User can update the list data using this function
  const handleEditTask = data => {
    navigation.navigate('EditTask', {selectedData: data});
  };

  // Delete item from list
  const handleDelete = id => {
    const updatedList = orderData?.filter(item => item.id !== id);
    dispatch(setOrderData(updatedList));
    Toast.show({
      type: 'success',
      text1: 'Task Deleted',
      text2: 'The task has been deleted successfully',
      position: 'bottom',
    });
  };

  // For toggling the checkbox
  const handleStatus = clickedItem => {
    const changeStatus = orderData?.map(item =>
      item.id === clickedItem.id ? {...item, status: !item.status} : item,
    );
    dispatch(setOrderData(changeStatus));
    Toast.show({
      type: 'success',
      text1: 'Status Changed',
      text2: 'The status has been changed successfully',
      position: 'bottom',
    });
  };

  // update the filter
  const showFilterResult = () => {
    if (checked === 'All') {
      setCurrentStatus('All');
      setVisible(false);
    } else if (checked === 'Pending') {
      setCurrentStatus(false);
      setVisible(false);
    } else {
      setCurrentStatus(true);
      setVisible(false);
    }
  };
  return (
    <View style={styles.main}>
      {/* TOPBAR AREA */}
      <View style={styles.topBar}>
        <Icon
          name={'clipboard-list'}
          color={BaseColors.white}
          size={25}
          style={styles.listIcon}
        />
        <HeaderBar title={'To Do'} noGoBack />
      </View>

      <View style={styles.sortBtn}>
        {/* ADD NEW ITEM IN LIST  */}
        <ActionButton
          title={'Add Task'}
          icon={'plus'}
          onPress={handleAddNewItem}
        />

        {/* THIS BUTTON IS USING FOR DISPLAY THE STATUS (PENDING,COMPLETED, ALL)  */}
        <ActionButton title={'Filter'} icon={'filter'} onPress={handleFilter} />
      </View>

      {/* showing the active status of list */}
      {!isEmpty(orderData) && (
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.currentStatus}>Current Status: </Text>
          <Text style={styles.selectedStatus}>
            {currentStatus === 'All'
              ? 'ALL'
              : currentStatus
              ? 'COMPLETED'
              : 'PENDING'}
          </Text>
        </View>
      )}

      {/* TODO LIST */}
      {!isEmpty(orderData) && isArray(orderData) ? (
        <ScrollView>
          {orderData?.map(item => {
            if (
              currentStatus === 'All' ? true : item?.status === currentStatus
            ) {
              return (
                <LinearGradient
                  key={item?.id?.toString()}
                  colors={[BaseColors.lightGrey, BaseColors.black]}
                  style={styles.list}>
                  <View style={styles.leftArea}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.description}>{item?.description}</Text>
                  </View>
                  <View style={styles.actions}>
                    <TouchableOpacity onPress={() => handleEditTask(item)}>
                      <LinearGradient
                        colors={[BaseColors.lightGrey, BaseColors.blue]}
                        style={[
                          styles.actionBtn,
                          {borderWidth: 1, borderColor: BaseColors.blue},
                        ]}>
                        <Icon
                          name={'edit'}
                          color={BaseColors.white}
                          size={18}
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(item?.id)}>
                      <LinearGradient
                        colors={[BaseColors.lightGrey, BaseColors.red]}
                        style={[
                          styles.actionBtn,
                          {borderWidth: 1, borderColor: BaseColors.red},
                        ]}>
                        <Icon
                          name={'trash-alt'}
                          color={BaseColors.white}
                          size={18}
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleStatus(item)}>
                      <LinearGradient
                        colors={[
                          BaseColors.lightGrey,
                          item?.status ? BaseColors.green : BaseColors.textGrey,
                        ]}
                        style={[
                          styles.actionBtn,
                          {
                            borderWidth: 1,
                            borderColor: item?.status
                              ? BaseColors.green
                              : BaseColors.textGrey,
                          },
                        ]}>
                        <Icon_1
                          name={
                            item?.status
                              ? 'check-circle-outline'
                              : 'checkbox-blank-circle-outline'
                          }
                          color={BaseColors.white}
                          size={25}
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              );
            }
          })}
        </ScrollView>
      ) : (
        <View style={styles.empty}>
          <Text
            style={{
              color: BaseColors.white,
              fontSize: 25,
            }}>
            No Data Found
          </Text>
        </View>
      )}

      {/* MODAL AREA */}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}>
          <Text style={styles.modalTitle}>Select any one</Text>
          <View>
            <Filter checked={checked} setChecked={setChecked} />
          </View>

          <View style={{alignItems: 'center'}}>
            <ActionButton
              title={'Apply'}
              icon={'check'}
              onPress={showFilterResult}
            />
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default Home;

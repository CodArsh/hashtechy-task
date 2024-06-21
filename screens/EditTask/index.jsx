import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CInput from '../../components/CInput';
import HeaderBar from '../../components/HeaderBar';
import {isEmpty} from 'lodash';
import ActionButton from '../../components/ActionButton';
import {useDispatch, useSelector} from 'react-redux';
import {setOrderData} from '../../redux/actions/actions';
import Toast from 'react-native-toast-message';
const EditTask = ({navigation, route}) => {
  let userId = route?.params?.selectedData?.id;

  const dispatch = useDispatch();

  // this orderData will provide all list data from storage
  const orderData = useSelector(state => state.rootReducer.orderData);

  // check validations here
  const errObj = {
    titleErr: 'Please enter the title',
    showTitleError: false,

    descriptionError: 'Please enter the description',
    showDescriptionError: false,
  };

  const [errorObj, setErrorObj] = useState(errObj);
  const [title, setTitle] = useState(route?.params?.selectedData?.title);
  const [description, setDescription] = useState(
    route?.params?.selectedData?.description,
  );

  // update task in the main list
  const handleUpdateTask = () => {
    const updatedList = orderData?.map(item =>
      item.id === userId ? {...item, title, description} : item,
    );
    if (!isEmpty(title) && !isEmpty(description)) {
      dispatch(setOrderData(updatedList));

      Toast.show({
        type: 'success',
        text1: 'Update successful',
        text2: 'The task has been updated successfully',
        position: 'bottom',
      });
      navigation.goBack();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Update  failed',
        text2: 'Please fill out all fields',
        position: 'bottom',
      });
    }
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.main}>
      <HeaderBar title={'Edit Task'} />
      <Text>EditTask</Text>

      <CInput
        lable="Title"
        value={title}
        onChangeText={e => (
          setTitle(e), setErrorObj({...errorObj, showTitleError: false})
        )}
        icon="pen"
        errorMsg={errorObj.titleErr}
        errVisible={errorObj.showTitleError}
        onBlur={() =>
          isEmpty(title) && setErrorObj({...errorObj, showTitleError: true})
        }
      />

      <CInput
        lable="Description"
        value={description}
        onChangeText={e => (
          setDescription(e),
          setErrorObj({...errorObj, showDescriptionError: false})
        )}
        icon="note"
        errorMsg={errorObj.descriptionError}
        errVisible={errorObj.showDescriptionError}
        onBlur={() =>
          isEmpty(description) &&
          setErrorObj({...errorObj, showDescriptionError: true})
        }
      />

      <View style={{alignItems: 'center'}}>
        <ActionButton
          title={'Update'}
          icon={'check'}
          onPress={handleUpdateTask}
        />
      </View>
    </View>
  );
};

export default EditTask;

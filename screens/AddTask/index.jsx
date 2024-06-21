import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CInput from '../../components/CInput';
import HeaderBar from '../../components/HeaderBar';
import {isEmpty} from 'lodash';
import ActionButton from '../../components/ActionButton';
import {useDispatch, useSelector} from 'react-redux';
import {setOrderData} from '../../redux/actions/actions';
import Toast from 'react-native-toast-message';

const AddTask = ({navigation}) => {
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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // add new task in the main list
  const handleAddTask = () => {
    const dataObj = {
      id:
        new Date().getTime().toString() +
        Math.floor(Math.random() * 1000).toString(),
      title: title,
      description: description,
      status: false,
    };
    if (!isEmpty(title) && !isEmpty(description)) {
      dispatch(setOrderData([...orderData, dataObj]));
      Toast.show({
        type: 'success',
        text1: 'Task added',
        text2: 'The new task has been added successfully',
        position: 'bottom',
      });

      navigation.goBack();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Submission  failed',
        text2: 'Please fill out all fields',
        position: 'bottom',
      });
    }

    setTitle('');
    setDescription('');
  };

  // two inputs and one button for add task
  return (
    <View style={styles.main}>
      <HeaderBar title={'Add Task'} />
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
        <ActionButton title={'Submit'} icon={'check'} onPress={handleAddTask} />
      </View>
    </View>
  );
};

export default AddTask;

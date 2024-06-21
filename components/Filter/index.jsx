import React from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {BaseColors} from '../../config/theme';
const Filter = ({checked, setChecked}) => {
  const onPressRadioButton = value => {
    setChecked(value); // Update checked state
  };
  return (
    <View style={{padding: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton
          color={BaseColors.white}
          value="All"
          status={checked === 'All' ? 'checked' : 'unchecked'}
          onPress={() => onPressRadioButton('All')}
        />
        <Text style={{color: BaseColors.white}}>All</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton
          color={BaseColors.white}
          value="Pending"
          status={checked === 'Pending' ? 'checked' : 'unchecked'}
          onPress={() => onPressRadioButton('Pending')}
        />
        <Text style={{color: BaseColors.white}}>Pending</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton
          color={BaseColors.white}
          value="Completed"
          status={checked === 'Completed' ? 'checked' : 'unchecked'}
          onPress={() => onPressRadioButton('Completed')}
        />
        <Text style={{color: BaseColors.white}}>Completed</Text>
      </View>
    </View>
  );
};

export default Filter;

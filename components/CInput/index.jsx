import {View} from 'react-native';
import React from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {BaseColors} from '../../config/theme';
const CInput = ({
  lable,
  value,
  onChangeText,
  secureTextEntry,
  numericKeyboard,
  icon,
  errVisible,
  errorMsg,
  onBlur,
}) => {
  return (
    <View style={{marginTop: 5}}>
      <TextInput
        label={lable}
        value={value}
        keyboardType={numericKeyboard ? 'number-pad' : 'default'}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={{
          backgroundColor: 'transparent',
          
        }}
        cursorColor={BaseColors.secondary}
        contentStyle={{
          color: BaseColors.white,
          
        }}
        underlineStyle={{
          borderBottomWidth: 1,
          borderBottomColor: BaseColors.secondary,
        }}
        right={<TextInput.Icon icon={icon} color={BaseColors.secondary} />}
        activeUnderlineColor={BaseColors.lightBlack}
      />

      <HelperText type="error" visible={errVisible}>
        {errorMsg}
      </HelperText>
    </View>
  );
};

export default CInput;

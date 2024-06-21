import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {BaseColors} from '../../config/theme';
const ActionButton = ({title, icon, onPress}) => {
  return (
    <LinearGradient
      colors={[BaseColors.white, BaseColors.yellow]}
      style={styles.add}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.addText}>
          <Icon name={icon} size={20} color={BaseColors.black} /> {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  addText: {
    color: BaseColors.black,
    fontSize: 20,
    textAlign: 'center',
  },
  add: {
    width: '23%',
    borderRadius: 10,
    padding: 4,
    marginBottom: 10,
  },
});

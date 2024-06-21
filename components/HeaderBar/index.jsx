import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {BaseColors} from '../../config/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const HeaderBar = ({title, noGoBack}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topper}>
      {!noGoBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={'arrow-back'} color={BaseColors.white} size={25} />
        </TouchableOpacity>
      )}
      <Text style={styles.titleText}>{title}</Text>
      <View />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: BaseColors.white,
    alignSelf: 'center',
    marginVertical: 8,
  },
  topper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

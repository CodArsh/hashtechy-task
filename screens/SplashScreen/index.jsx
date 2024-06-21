import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.main}>
      <Image
        source={require('../../assets/images/logo.jpeg')}
        style={styles.imgStyle}
      />
    </View>
  );
};

export default SplashScreen;

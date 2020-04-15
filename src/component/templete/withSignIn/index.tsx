import React, {ReactNode} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  top: {
    backgroundColor: '#FFF',
    height: (height * 3) / 10,
  },
  middle: {
    backgroundColor: '#FFF',
    height: (height * 4) / 10,
  },

  bottom: {
    backgroundColor: '#FFF',
    height: (height * 3) / 10,
  },
});
interface Props {
  branding: ReactNode;
  form: ReactNode;
  details: ReactNode;
}

const WithSignIn: React.FC<Props> = ({branding, form, details}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>{branding}</View>
      <View style={styles.middle}>{form}</View>
      <View style={styles.bottom}>{details}</View>
    </View>
  );
};

export default WithSignIn;

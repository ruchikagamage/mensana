import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface Props {
  label: string;
  error: boolean;
}

const styles = StyleSheet.create({
  inputStyle: {width: '100%', height: 50, backgroundColor: '#FFF'},
  formControl: {width: '100%', marginBottom: 10},
});

const FormInput: React.FC<Props> = ({label, error}) => {
  return (
    <View style={styles.formControl}>
      <TextInput underlineColor="#FF5400" error={error} mode="outlined" style={styles.inputStyle} label={label} />
    </View>
  );
};

export default FormInput;

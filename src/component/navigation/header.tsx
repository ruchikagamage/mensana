import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {GoBack} from './../asset/icons';
import {Button, TextBlock} from './../atoms';

const styles = StyleSheet.create({
  block: {backgroundColor: '#FFF'},
});

const AppHeader = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.block}>
      <Button onPress={(): void => navigation.goBack()} backgroundColor={3} buttonWidth="15" size={5} radius={50}>
        <GoBack />
      </Button>
      <TextBlock colorNumber={1} size={2.2} weight="700">
        Welcome Back
      </TextBlock>
    </Appbar.Header>
  );
};

export default AppHeader;

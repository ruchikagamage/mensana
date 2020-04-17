import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextBlock, HorizontalBreak} from './../../atoms';
import AuthHead from './../../molecules/authHead';
import TermsAndPolicy from './../../molecules/termsAndPolicy';
import LoginForm from './../../organisms/loginForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    paddingHorizontal: 15,
    width: '100%',
  },
  details: {
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    flex: 1,
    left: 0,
    right: 0,
    bottom: 30,
    paddingHorizontal: 15,
  },
  form: {alignItems: 'center', width: '100%', marginTop: 30},
  brand: {alignItems: 'center', width: '100%', marginTop: -120},
});

const Login: React.FC = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.brand}>
        <AuthHead heading="LOGIN" subHeading="Sign in to continue" />
      </View>
      <View style={styles.form}>
        <LoginForm navigation={navigation} />
        <HorizontalBreak size={20} />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <TextBlock family="primary" letterSpace={0} size={2} weight="600" colorNumber={1} lheight={20}>
            Forgot your password?
          </TextBlock>
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <TermsAndPolicy />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

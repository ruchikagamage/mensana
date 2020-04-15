import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {TextBlock, HorizontalBreak} from './../../atoms';
import AuthHead from './../../molecules/authHead';
import ForgotPasswordForm from './../../organisms/forgotPasswordForm';

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
    bottom: 50,
    paddingHorizontal: 15,
  },
  form: {alignItems: 'center', width: '100%', marginTop: 40},
  brand: {alignItems: 'center', width: '100%', marginTop: -150},
});

const Login: React.FC = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.brand}>
        <AuthHead heading="Forgot Password ?" subHeading="Retrieve your password" />
      </View>
      <View style={styles.form}>
        <ForgotPasswordForm navigation={navigation} />
        {/* <HorizontalBreak size={20} />
        <TouchableOpacity>
          <TextBlock family="primary" letterSpace={0} size={2} weight="600" colorNumber={1} lheight={20}>
            Forgot your password?
          </TextBlock>
        </TouchableOpacity> */}
      </View>
      {/* <View style={styles.details}>
        <TextBlock size={1.8} weight="400" colorNumber={1} letterSpace={0}>
          By continuing, you agree to Mensana’s Terms of Service. We will manage information about as described in our
          Privacy Policy and Cookie Policy.
        </TextBlock>
      </View> */}
    </KeyboardAvoidingView>
  );
};

export default Login;

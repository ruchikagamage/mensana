import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, TextBlock, Link} from './../../atoms';
import AuthHead from './../../molecules/authHead';
import TermsAndPolicy from './../../molecules/termsAndPolicy';
import RegistrationForm from './../../organisms/registrationForm';
import {Facebook} from '../../asset/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  keyboarAvoid: {
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    paddingHorizontal: 15,
    width: '100%',
    // height: height,
    paddingBottom: 50,
    paddingTop: 100,
  },
  details: {
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'center',
    // position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    // bottom: -50,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  form: {alignItems: 'center', width: '100%', marginTop: 20},
  brand: {alignItems: 'center', width: '100%'},
  navOptions: {
    marginTop: 30,
    width: '100%',
  },
  facebookLink: {
    flexDirection: 'row',
    width: '100%',
  },
  signIn: {
    marginTop: 20,
  },
});

const Registration: React.FC = () => {
  const navigation = useNavigation();
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
    <KeyboardAwareScrollView style={styles.keyboarAvoid}>
      <View style={styles.container}>
        <View style={styles.brand}>
          <AuthHead heading="SIGN UP" />
        </View>
        <View style={styles.form}>
          <RegistrationForm navigation={navigation} />
        </View>
        <View style={styles.navOptions}>
          <View style={styles.facebookLink}>
            <Facebook />
            <Link>
              <TextBlock family="primary" letterSpace={0} size={2} weight="700" colorNumber={1} lheight={24}>
                {' '}
                Connect with Facebook
              </TextBlock>
            </Link>
          </View>
          <View style={styles.signIn}>
            <TextBlock
              family="primary"
              align="center"
              letterSpace={0}
              size={2}
              weight="700"
              colorNumber={1}
              lheight={30}>
              Already have Greg account ?
            </TextBlock>
            <Button border={true} backgroundColor={4} size={7} onPress={(): void => navigation.navigate('Login')}>
              <TextBlock size={2.5} weight="700" colorNumber={3} letterSpace={1}>
                SIGN IN
              </TextBlock>
            </Button>
          </View>
        </View>
        <View style={styles.details}>
          <TermsAndPolicy />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Registration;

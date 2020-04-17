import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
import Header from './header';
import Welcome from './../screens/welcome';
import Login from './../screens/login';
import Registration from './../screens/registration';
import ForgotPassword from './../screens/forgotPassword';
// import AuthOptions from '../organisms/authOptions';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Registration: undefined;
  ForgotPassword: undefined;
  // AuthOptions: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

const WelcomeRoute = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </>
  );
};

const LoginRoute = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
        }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
};

const RegistrationRoute = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </>
  );
};

const ForgotPasswordRoute = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
        }}>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </>
  );
};

const Root = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={WelcomeRoute}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginRoute}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationRoute}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ForgotPassword"
          component={ForgotPasswordRoute}
        />
      </Stack.Navigator>
    </>
  );
};

export default Root;

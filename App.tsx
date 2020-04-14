/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './theme/default';
import {YellowBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './src/component/screens/welcome';
import Login from './src/component/screens//login';
// import Registration from './src/component/screens/registration';

// declare var global: {HermesInternal: null | {}};
YellowBox.ignoreWarnings(['Require cycle:', 'Warning: Async Storage']);

type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

const App = (): Element => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="Welcome"
                        component={Welcome}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                        }}
                        name="Login"
                        component={Login}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;

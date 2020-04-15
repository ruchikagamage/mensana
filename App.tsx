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
import {YellowBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import RootNavigation from './src/component/navigation/rootNavigation';
import theme from './themes/default';
import themePaper from './themes/paper';

// declare var global: {HermesInternal: null | {}};
YellowBox.ignoreWarnings(['Require cycle:', 'Warning: Async Storage']);

const App = (): Element => {
  return (
    <PaperProvider theme={themePaper}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
};

export default App;

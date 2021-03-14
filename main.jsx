import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from 'src/store';

import { SplashScreen } from 'SplashScreen';
import { App } from 'src/features';

import 'src/i18n';

import { useSetInitialLanguage } from 'hooks';

const Stack = createStackNavigator();

export const Main = () => {
  useSetInitialLanguage();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="App" component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

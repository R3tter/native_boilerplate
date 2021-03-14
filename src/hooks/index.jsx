import React, { useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeModules, Platform } from 'react-native';
import i18next from 'i18next';

import { getIsAuth } from 'App/selectors/cached';
import { languages } from 'constants';

export const useRoutes = routes => {
  const isAuth = useSelector(getIsAuth);
  const navigation = useNavigation();

  const Stack = useMemo(() => createStackNavigator(), []);

  useEffect(() => {
    navigation.navigate(isAuth ? 'Profile' : 'Auth');
  }, [isAuth]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {routes.map(({ name, component }) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
};

export const useSetInitialLanguage = () => {
  useEffect(() => {
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;

    const locale = Object.values(languages).find(language => deviceLanguage.includes(language));

    i18next.changeLanguage(locale);
  }, []);
};

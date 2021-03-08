import React, { useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getIsAuth } from 'App/selectors/cached';

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

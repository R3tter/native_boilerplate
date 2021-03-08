import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { asyncKey } from 'constants';
import { update } from 'App/actions/cached';

export const SplashScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loadData = useCallback(async () => {
    const data = await AsyncStorage.getItem(asyncKey);
    dispatch(update(JSON.parse(data)));
    navigation.navigate('App');
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return <Text>Loading...</Text>;
};

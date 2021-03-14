import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

export const Auth = () => {
  const { t } = useTranslation('common');

  return (
    <SafeAreaView>
      <Text>{t('loginPage')}</Text>
    </SafeAreaView>
  );
};

import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
  const { t } = useTranslation('common');
  return (
    <SafeAreaView>
      <Text>{t('profilePage')}</Text>
    </SafeAreaView>
  );
};

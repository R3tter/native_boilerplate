import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import * as styles from './style';

export const App = () => (
  <React.Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.regular.scrollView}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  </React.Fragment>
);

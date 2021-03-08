import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import { Header, LearnMoreLinks, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import * as styles from './style';

export const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.regular.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.regular.engine}>
            <Text style={styles.regular.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.regular.body}>
          <View style={styles.regular.sectionContainer}>
            <Text style={styles.regular.sectionTitle}>Step One 2</Text>
            <Text style={styles.regular.sectionDescription}>
              Edit <Text style={styles.regular.highlight}>App.js</Text> to change this screen and then come back to see
              your edits.
            </Text>
          </View>
          <View style={styles.regular.sectionContainer}>
            <Text style={styles.regular.sectionTitle}>See Your Changes</Text>
            <Text style={styles.regular.sectionDescription}>
              <ReloadInstructions />
            </Text>
          </View>
          <View style={styles.regular.sectionContainer}>
            <Text style={styles.regular.sectionTitle}>Debug</Text>
            <Text style={styles.regular.sectionDescription}>
              <DebugInstructions />
            </Text>
          </View>
          <View style={styles.regular.sectionContainer}>
            <Text style={styles.regular.sectionTitle}>Learn More</Text>
            <Text style={styles.regular.sectionDescription}>Read the docs to discover what to do next:</Text>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

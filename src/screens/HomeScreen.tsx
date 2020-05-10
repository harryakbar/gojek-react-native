import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Header, Gopay, ShortcutApps, GofoodList, NewsFeed} from '../modules';
import HorizontalLine from '../components/HorizontalLine';
import MenuBar from '../components/MenuBar';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={Styles.container}>
          <Gopay />
          <ShortcutApps />
          <HorizontalLine />
          <GofoodList title="Pilihan Resto Terdekat" />
          <HorizontalLine />
          <NewsFeed />
        </ScrollView>
        <MenuBar />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  container: {},
});

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const DetailScreen = ({route}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.params.text}</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;

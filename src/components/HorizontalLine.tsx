import React from 'react';
import {StyleSheet, View} from 'react-native';

function HorizontalLine() {
  return <View style={Styles.line} />;
}

export default HorizontalLine;

const Styles = StyleSheet.create({
  line: {
    marginHorizontal: 12,
    marginVertical: 8,
    height: 1,
    backgroundColor: '#E8E8E8',
  },
});

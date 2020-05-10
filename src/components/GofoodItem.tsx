import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../assets';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  image: string;
};

function GofoodItem({title, image}: Props) {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('Details', {text: title})}>
      <Image
        defaultSource={Images.placeholder}
        style={Styles.image}
        source={{uri: image}}
      />
      <Text style={Styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default GofoodItem;

const Styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    borderRadius: 6,
  },
  text: {
    paddingVertical: 10,
    fontWeight: '700',
  },
});
